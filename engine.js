/* Ferana 3-Matrix Logic Engine.
   Ported line for line from the Streamlit prototype (app.py). Same thresholds,
   same weights, same tiers, same wording. Python's round() and numpy's round()
   both round halves to the nearest even number, so pyRound() does the same. */
(function (root) {
  "use strict";

  function clip(x, lo, hi) { return Math.min(hi, Math.max(lo, x)); }

  function pyRound(x) {
    var f = Math.floor(x);
    var d = x - f;
    if (d < 0.5) return f;
    if (d > 0.5) return f + 1;
    return f % 2 === 0 ? f : f + 1;
  }

  // [min resilience, tier, Chapter II heart rate ceiling, Chapter I, Chapter II, Chapter III, coaching cue]
  var TIERS = [
    { min: 80, name: "PRIMED", ceiling: "up to 85% of max HR",
      ch1: [["Diaphragmatic breathwork", 3], ["Spinal decompression", 5], ["Dynamic hip opener", 4]],
      ch2: [["Dynamic warm-up flow", 5], ["Power flow: squat to lunge sequences", 12], ["Metabolic circuit, 30 sec on / 15 sec off", 10], ["Core stability series", 5], ["Active cool-down", 3]],
      ch3: [["Hip and hamstring release", 5], ["Supine spinal twist", 4], ["4-7-8 breathwork", 3], ["Body scan", 3]],
      cue: "Your body is ready to work. Chapter II turns up the intensity today." },
    { min: 60, name: "BALANCED", ceiling: "up to 75% of max HR",
      ch1: [["Diaphragmatic breathwork", 3], ["Spinal decompression", 5], ["Dynamic hip opener", 4]],
      ch2: [["Joint mobility warm-up", 5], ["Flow: lunge to hip-hinge sequences", 12], ["Steady metabolic circuit, 30 sec on / 30 sec off", 8], ["Core stability series", 6], ["Cool-down stretch", 4]],
      ch3: [["Hip and hamstring release", 5], ["Supine spinal twist", 4], ["Box breathing", 3], ["Body scan", 3]],
      cue: "A balanced day. Chapter II holds a steady metabolic pace." },
    { min: 40, name: "STRAINED", ceiling: "under 65% of max HR",
      ch1: [["Extended-exhale breathwork", 4], ["Supported spinal decompression", 4], ["Gentle hip release", 4]],
      ch2: [["Joint mobility warm-up", 5], ["Slow-tempo strength flow", 10], ["Low-impact metabolic circuit, 20 sec on / 40 sec off", 5], ["Gentle core series", 5], ["Cool-down stretch", 5]],
      ch3: [["Hip and hamstring release", 5], ["Supported child's pose", 4], ["Extended-exhale breathwork", 3], ["Body scan", 3]],
      cue: "Your system is carrying some strain. Chapter II slows down and cuts the impact." },
    { min: 0, name: "OVERLOADED", ceiling: "under 60% of max HR",
      ch1: [["Extended-exhale breathwork", 5], ["Supported spinal decompression", 5], ["Gentle hip release", 5]],
      ch2: [["Gentle joint mobility", 6], ["Supported mobility flow", 8], ["Breath-led core work", 3], ["Long cool-down stretch", 3]],
      ch3: [["Supported hip and hamstring release", 5], ["Supported spinal twist", 4], ["Extended-exhale breathwork", 3], ["Body scan", 3]],
      cue: "Your body is asking for recovery. Today's flow is shorter and softer, but still fully guided." }
  ];

  var FOCUS_LINES = {
    PRIMED: "Resilience focus: stretch your capacity with a stress your body can absorb today.",
    BALANCED: "Resilience focus: build capacity steadily with a balanced load.",
    STRAINED: "Resilience focus: protect your baseline while you rebuild.",
    OVERLOADED: "Resilience focus: restore first. Capacity follows recovery."
  };

  function copyMoves(list) { return list.map(function (m) { return [m[0], m[1]]; }); }

  function run(input) {
    var hrv = input.hrv, rhrDrift = input.rhrDrift, sleepDebt = input.sleepDebt;

    // MATRIX 1: safety verification
    var checks = [
      [rhrDrift >= 7, "Resting heart rate is 7+ BPM above your baseline, which can signal illness, stress, or under-recovery. If you feel unwell (fever, chest pain, dizziness), skip the movement and rest."],
      [sleepDebt >= 4, "Sleep debt is 4+ hours, so today's routine is softened to protect recovery."],
      [hrv < 30, "HRV is very low today, so today's routine leans on nervous system support."]
    ];
    var safetyWarnings = checks.filter(function (c) { return c[0]; }).map(function (c) { return c[1]; });
    var matrix1 = rhrDrift >= 7 ? "CRITICAL WARNING" : (safetyWarnings.length ? "CAUTION" : "PASS");

    // MATRIX 2: resilience score (higher = more resilient)
    var hrvPts = clip((hrv - 20) / 80, 0, 1) * 45;
    var rhrPts = clip((15 - rhrDrift) / 25, 0, 1) * 30;
    var sleepPts = clip(1 - sleepDebt / 6, 0, 1) * 25;
    var resilience = pyRound(hrvPts + rhrPts + sleepPts);
    if (matrix1 === "CRITICAL WARNING") resilience = Math.min(resilience, 39);
    var stressIndex = 100 - resilience;

    // MATRIX 3: chapter builder
    var tier = TIERS.filter(function (t) { return resilience >= t.min; })[0];
    var ch1 = copyMoves(tier.ch1), ch2 = copyMoves(tier.ch2), ch3 = copyMoves(tier.ch3);

    // Personal adjustments on top of the tier
    if (rhrDrift >= 5) ch1 = [["Extended-exhale breathwork", ch1[0][1]]].concat(ch1.slice(1));
    if (sleepDebt >= 2) ch3 = ch3.slice(0, 2).concat([["Legs-up-the-wall sleep prep", ch3[2][1]]], ch3.slice(3));
    var adjustNotes = [
      [rhrDrift >= 5, "Chapter I breathwork is extended because your resting heart rate is elevated."],
      [sleepDebt >= 2, "Chapter III adds a legs-up-the-wall sleep prep because you are short on sleep."],
      [hrv < 40, "Lower HRV shifts today's routine toward nervous system support."]
    ].filter(function (c) { return c[0]; }).map(function (c) { return c[1]; });

    return {
      safetyWarnings: safetyWarnings, matrix1: matrix1,
      resilience: resilience, stressIndex: stressIndex,
      tier: tier.name, ceiling: tier.ceiling, cue: tier.cue, focus: FOCUS_LINES[tier.name],
      ch1: ch1, ch2: ch2, ch3: ch3, adjustNotes: adjustNotes
    };
  }

  // Resilience trend over the last 7 days. rows = 7 x {hrv, rhr, sleep}; blanks as NaN.
  // Means skip NaN, like pandas.
  function trend(rows) {
    var scores = rows.map(function (r) {
      var a = clip((r.hrv - 20) / 80, 0, 1) * 45;
      var b = clip((15 - r.rhr) / 25, 0, 1) * 30;
      var c = clip(1 - r.sleep / 6, 0, 1) * 25;
      var s = a + b + c;
      return isNaN(s) ? NaN : pyRound(s);
    });
    function mean(xs) {
      var v = xs.filter(function (x) { return !isNaN(x); });
      if (!v.length) return NaN;
      return v.reduce(function (p, q) { return p + q; }, 0) / v.length;
    }
    var t = mean(scores.slice(-3)) - mean(scores.slice(0, 3));
    var text = isNaN(t) ? "n/a" : (t >= 0 ? "+" : "") + String(pyRound(t)) + " pts";
    var msg = isNaN(t) ? "Not enough data yet."
      : (t >= 3 ? "Trending up over this week." : (t <= -3 ? "Trending down over this week." : "Holding steady this week."));
    return { scores: scores, trend: t, text: text, message: msg };
  }

  var api = { run: run, trend: trend, pyRound: pyRound, TIERS: TIERS };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.FeranaEngine = api;
})(typeof window !== "undefined" ? window : globalThis);
