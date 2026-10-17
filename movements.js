/* Ferana movement library: what each movement is, how to do it, an easier version, and when to stop.
   Keys match the movement names the engine can output. */
(function (root) {
  "use strict";

  var L = {
    "Diaphragmatic breathwork": {
      what: "Slow belly breathing that moves your diaphragm instead of your shoulders. It is the quickest way to tell your body it can settle.",
      steps: [
        "Lie on your back with your knees bent, or sit tall. Rest one hand on your chest and one on your belly.",
        "Breathe in through your nose for 4 counts. Let the belly hand rise while the chest hand stays quiet.",
        "Breathe out through softly pursed lips for 6 counts, feeling the belly fall.",
        "Keep this easy rhythm for the full time. Never force the breath."
      ],
      easier: "Breathe in for 3 counts and out for 4.",
      stop: "dizzy or tingling. Go back to normal breathing."
    },
    "Extended-exhale breathwork": {
      what: "Breathing where the out-breath is clearly longer than the in-breath. A longer exhale helps your body shift toward rest.",
      steps: [
        "Lie down or sit with your back supported. Let your shoulders drop away from your ears.",
        "Breathe in gently through your nose for 4 counts.",
        "Breathe out slowly through your nose or softly pursed lips for 8 counts, as if fogging a mirror.",
        "Let the next breath come on its own, then repeat. Keep it smooth, never strained."
      ],
      easier: "Breathe in for 3 counts and out for 6.",
      stop: "light-headed or tingling. Return to normal breathing."
    },
    "Spinal decompression": {
      what: "Gentle positions that lengthen your spine and ease pressure on the muscles around it.",
      steps: [
        "Lie on your back with your knees bent and your feet flat, hip-width apart.",
        "Reach both arms overhead along the floor. Lengthen your fingertips away from your hips without arching your lower back.",
        "Hug your knees toward your chest and rock slowly side to side for 5 breaths.",
        "Lower your feet to the floor, let your knees fall together, and rest for 3 breaths."
      ],
      easier: "Skip the arm reach and keep your hands on your belly.",
      stop: "sharp or shooting pain, numbness or tingling."
    },
    "Supported spinal decompression": {
      what: "The same spinal release with your legs held up by a chair or couch, so your back does no work at all.",
      steps: [
        "Lie on your back and rest your calves on a chair seat or couch, with your hips and knees bent about 90 degrees.",
        "Rest your arms by your sides, palms up, or place your hands on your belly.",
        "Let your lower back soften toward the floor. Do not press it down.",
        "Breathe slowly through your nose and let your legs feel heavy."
      ],
      easier: "Slide a folded towel under your head.",
      stop: "sharp pain, numbness or tingling in your legs."
    },
    "Dynamic hip opener": {
      what: "A slow lunge position that loosens tight hips before you ask more of them.",
      steps: [
        "Start on hands and knees, wrists under shoulders and knees under hips.",
        "Step your right foot forward, outside your right hand, into a low lunge with your back knee down.",
        "Sink your hips forward and back 6 times, then rotate your right knee out and in 3 times.",
        "Step back and repeat on the left side."
      ],
      easier: "Rest your back knee on a folded towel and use a smaller range.",
      stop: "pinching at the front of the hip or sharp knee pain."
    },
    "Gentle hip release": {
      what: "A resting hip stretch where gravity does the work, with no effort from you.",
      steps: [
        "Lie on your back with your knees bent and your feet flat.",
        "Cross your right ankle over your left thigh, just above the knee, and let your right knee fall open.",
        "Stay here, or draw your left knee a little closer for more stretch. Breathe slowly.",
        "Switch sides and spend the same time on the left."
      ],
      easier: "Keep both feet on the floor and let one knee drop open.",
      stop: "knee pain or a pinch in the hip."
    },
    "Dynamic warm-up flow": {
      what: "A short sequence that raises your heart rate gradually and wakes up the joints you are about to use.",
      steps: [
        "March in place for 1 minute, lifting your knees and swinging your arms.",
        "Circle your arms 10 times in each direction, then circle your hips 6 times each way.",
        "Do 6 slow bodyweight squats, sitting your hips back and keeping your chest tall.",
        "Do 4 reverse lunges on each side, reaching your arms overhead as you stand.",
        "Shake out your arms and legs and take a few deep breaths."
      ],
      easier: "Make the squats shallow and skip the overhead reach.",
      stop: "joint pain or light-headedness."
    },
    "Joint mobility warm-up": {
      what: "A gentle top-to-bottom warm-up that moves each joint through its range without effort.",
      steps: [
        "Stand tall. Roll your shoulders back 6 times, then forward 6 times.",
        "Rotate your torso slowly side to side with loose arms, 8 times each way.",
        "Place your hands on your hips and draw 6 slow circles each way.",
        "Hold a wall or chair and circle each ankle 6 times in each direction.",
        "Finish with 6 slow bodyweight squats, as deep as feels comfortable."
      ],
      easier: "Do the whole sequence seated.",
      stop: "sharp pain in any joint."
    },
    "Gentle joint mobility": {
      what: "Small, easy movements that warm each joint while your heart rate stays low.",
      steps: [
        "Sit tall on a chair. Roll your shoulders back 6 times, then forward 6 times.",
        "Turn your head slowly to look over each shoulder, 4 times per side.",
        "Twist your torso gently from side to side, 6 times each way, with your hands on your thighs.",
        "Lift one knee at a time and circle each ankle 6 times in each direction.",
        "Stand and do 5 slow sit-to-stands, using your hands if you need them."
      ],
      easier: "Stay seated for the whole sequence.",
      stop: "dizziness or sharp pain."
    },
    "Power flow: squat to lunge sequences": {
      what: "A continuous strength flow that links squats and lunges to build leg and hip capacity at a steady, strong pace.",
      steps: [
        "Stand with your feet hip-width apart. Sit into a squat with your chest tall, then drive up through your heels.",
        "Step your right foot back into a reverse lunge, then push off and return to standing.",
        "Squat again, then step your left foot back into a reverse lunge. That is one round.",
        "Keep a smooth, strong rhythm and repeat for the full time. Breathe out as you stand."
      ],
      easier: "Use shallower squats and lunge without letting your back knee touch down.",
      stop: "knee pain, or if you cannot say a short sentence. Slow down first."
    },
    "Flow: lunge to hip-hinge sequences": {
      what: "A steady flow that pairs lunges with hip hinges to train your legs, glutes and back at a moderate pace.",
      steps: [
        "Step your right foot back into a reverse lunge, then return to standing.",
        "Soften your knees, push your hips back, and slide your hands down your thighs in a hip hinge with a flat back.",
        "Stand tall by driving your hips forward, then repeat the lunge on your left side.",
        "Keep the pace steady and smooth for the full time."
      ],
      easier: "Shorten the lunge and keep the hinge shallow.",
      stop: "lower back pain, knee pain, or breathlessness. Rest and slow down."
    },
    "Slow-tempo strength flow": {
      what: "Strength work done slowly, so the effort is in control rather than speed. It builds capacity without spiking your heart rate.",
      steps: [
        "Do 8 slow squats: 3 counts down, 1 count pause, 3 counts up.",
        "Do 8 hip hinges with your hands sliding down your thighs, moving at the same slow tempo.",
        "Do 8 incline push-ups with your hands on a counter or sturdy table.",
        "Do 10 glute bridges on your back, holding the top for 2 counts.",
        "Rest as you need, then repeat the round until the time is up."
      ],
      easier: "Use a chair for the squats and do fewer repetitions.",
      stop: "pain, or a racing heart. Rest until you feel steady."
    },
    "Supported mobility flow": {
      what: "A floor sequence that opens the spine, hips and shoulders with your weight fully supported.",
      steps: [
        "Start on hands and knees. Arch and round your back slowly, 8 times, breathing with the movement.",
        "Slide your right arm under your left arm and rest your shoulder and ear on the floor. Hold 4 breaths, then switch sides.",
        "Sit your hips back toward your heels in child's pose, with a pillow under your torso if you like.",
        "Rock gently forward and back for 5 breaths, then rest."
      ],
      easier: "Place a pillow under your knees and your chest.",
      stop: "knee pain or a pinch in the wrists. Rest on your forearms."
    },
    "Metabolic circuit, 30 sec on / 15 sec off": {
      what: "A high-effort interval circuit that works your whole body in short bursts with short rests.",
      steps: [
        "Choose four moves: bodyweight squats, alternating reverse lunges, mountain climbers and high knees.",
        "Work for 30 seconds at a hard but controlled effort, then rest for 15 seconds before the next move.",
        "After all four moves, rest for 60 seconds. Repeat the circuit until the time is up.",
        "Check your heart rate during the rests and stay under your ceiling."
      ],
      easier: "Replace mountain climbers and high knees with marching, and do the squats without any hop.",
      stop: "chest pain, dizziness or sharp pain. Stop and rest."
    },
    "Steady metabolic circuit, 30 sec on / 30 sec off": {
      what: "A moderate interval circuit with equal work and rest, so your heart rate rises and recovers.",
      steps: [
        "Choose four moves: bodyweight squats, step-back lunges, standing knee drives and incline push-ups.",
        "Work for 30 seconds at a moderate effort, then rest for 30 seconds before the next move.",
        "After all four moves, rest for 45 seconds. Repeat the circuit until the time is up.",
        "Keep your effort steady and stay under your heart rate ceiling."
      ],
      easier: "Do the knee drives as slow marches and the push-ups against a wall.",
      stop: "dizziness, chest pain or sharp joint pain."
    },
    "Low-impact metabolic circuit, 20 sec on / 40 sec off": {
      what: "A short, gentle interval circuit with long rests, so your heart rate rises just a little and recovers fully.",
      steps: [
        "Choose four low-impact moves: marching with arm swings, sit-to-stand squats, wall push-ups and standing knee drives.",
        "Work for 20 seconds at an easy effort, then rest for 40 seconds before the next move.",
        "Do not jump at any point. Keep at least one foot on the floor.",
        "Repeat for the full time and stay under your heart rate ceiling."
      ],
      easier: "Lengthen the rest to 60 seconds.",
      stop: "dizziness, breathlessness or pain."
    },
    "Core stability series": {
      what: "Four slow exercises that train your trunk to stay steady while your arms and legs move.",
      steps: [
        "Dead bug: on your back with knees over hips, slowly lower the opposite arm and leg toward the floor, 8 per side.",
        "Bird dog: on hands and knees, extend the opposite arm and leg and hold for 2 counts, 6 per side.",
        "Forearm plank: hold for 20 to 30 seconds with your body in one line.",
        "Side plank: hold for 15 to 20 seconds per side, on your knees if you need to."
      ],
      easier: "Plank from your knees, and keep the dead bug to arms only.",
      stop: "lower back pain, or if your back sags. Rest and use the easier version."
    },
    "Gentle core series": {
      what: "Low-load core work that builds stability without strain.",
      steps: [
        "Dead bug, arms only: on your back with knees bent over hips, lower one arm overhead and return, 8 per side.",
        "Bird dog: on hands and knees, extend one leg back and hold for 2 counts, 6 per side.",
        "Glute bridge: lift your hips and hold for 5 slow breaths, 3 times."
      ],
      easier: "Skip the bird dog and add an extra glute bridge.",
      stop: "lower back pain or a pinch in the hips."
    },
    "Breath-led core work": {
      what: "Core activation that follows your breathing, so there is no strain and no breath holding.",
      steps: [
        "Lie on your back with your knees bent and your feet flat.",
        "Breathe in through your nose and let your belly rise.",
        "As you breathe out slowly, draw your lower belly in gently and lift one foot a few inches off the floor.",
        "Lower it as you breathe in, and alternate feet. Keep your back relaxed."
      ],
      easier: "Just practice the exhale and the gentle belly draw, with both feet down.",
      stop: "back pain or breath holding. Rest and breathe normally."
    },
    "Active cool-down": {
      what: "A gradual wind-down that brings your heart rate back toward resting while the muscles you used are still warm.",
      steps: [
        "Walk slowly in place or around the room for 1 minute, letting your arms swing loosely.",
        "Stand and hold your right foot behind you for a quad stretch for 20 seconds, then switch sides.",
        "Press your hands into a wall and stretch one calf at a time for 20 seconds each.",
        "Fold forward from your hips and hang with soft knees for 5 slow breaths."
      ],
      easier: "Hold a chair for balance and bend your knees in the forward fold.",
      stop: "dizziness when you stand or fold. Rise slowly and sit down."
    },
    "Cool-down stretch": {
      what: "Easy stretches that lengthen the muscles you just used while your heart rate settles.",
      steps: [
        "Walk slowly for 30 seconds to bring your heart rate down.",
        "Stretch each quad, standing and holding your foot behind you, for 20 seconds per side.",
        "Stretch each calf against a wall for 20 seconds per side.",
        "Fold forward with soft knees for 5 slow breaths, then roll up slowly."
      ],
      easier: "Hold a chair or wall for balance throughout.",
      stop: "sharp pain or dizziness. Never stretch into pain."
    },
    "Long cool-down stretch": {
      what: "A slower, longer set of stretches that lets your body come all the way down.",
      steps: [
        "Walk slowly for 1 minute to bring your heart rate down.",
        "Stretch each quad, standing and holding your foot behind you, for 30 seconds per side.",
        "Stretch each calf against a wall for 30 seconds per side.",
        "Open your chest by clasping your hands behind your back and lifting them gently for 5 breaths.",
        "Fold forward with soft knees for 5 slow breaths and roll up slowly."
      ],
      easier: "Do the whole sequence seated, using a strap or towel where needed.",
      stop: "sharp pain or dizziness."
    },
    "Hip and hamstring release": {
      what: "Lying stretches for the back of your legs and your hips, done on the floor where you can fully relax.",
      steps: [
        "Lie on your back and loop a towel or strap around your right foot, with the left knee bent and foot flat.",
        "Straighten the right leg toward the ceiling as far as is comfortable, keeping your hips on the floor.",
        "Hold for 5 slow breaths, then cross your right ankle over your left thigh in a figure-four for 5 more.",
        "Switch to the left side."
      ],
      easier: "Keep the lifted knee bent.",
      stop: "pain behind the knee or sharp pain in the hip."
    },
    "Supported hip and hamstring release": {
      what: "The same release with extra support, so your muscles do no work at all.",
      steps: [
        "Lie on your back with your legs up on a chair seat or a few stacked pillows.",
        "Let your knees stay slightly bent and your feet relax.",
        "Cross your right ankle over your left knee, and let the right knee fall open. Hold for 5 slow breaths.",
        "Switch sides and spend the same time on the left."
      ],
      easier: "Keep both legs resting without crossing.",
      stop: "knee pain or numbness."
    },
    "Supine spinal twist": {
      what: "A gentle lying twist that releases the muscles along your spine.",
      steps: [
        "Lie on your back with your knees bent and your arms out to the sides in a T shape.",
        "Let both knees fall to the right while your shoulders stay on the floor.",
        "Turn your head to the left if that is comfortable, and breathe slowly for 5 breaths.",
        "Bring your knees back to center and repeat on the other side."
      ],
      easier: "Rest a pillow between your knees, and let them fall only partway.",
      stop: "pain in the lower back or a pinch in the hip."
    },
    "Supported spinal twist": {
      what: "A twist where your knees are held up on a pillow, so there is nothing to force.",
      steps: [
        "Lie on your back with your knees bent and a pillow beside your right hip.",
        "Let both knees fall to the right and rest on the pillow, with your arms out to the sides.",
        "Keep your shoulders soft and breathe slowly for 5 breaths.",
        "Bring your knees back to center and repeat on the left."
      ],
      easier: "Use a taller stack of pillows so your knees barely drop.",
      stop: "pain in the back or a pinch in the hip."
    },
    "Supported child's pose": {
      what: "A restful forward fold where a pillow holds your weight and your breathing does the rest.",
      steps: [
        "Kneel with your knees wide and your big toes touching.",
        "Place a pillow or folded blanket lengthwise in front of you.",
        "Sit your hips back toward your heels and lay your torso and forehead on the pillow.",
        "Rest your arms alongside you and breathe slowly into your back."
      ],
      easier: "Put a rolled towel behind your knees, or lie over a stack of pillows.",
      stop: "knee pain. Come up and rest on your back instead."
    },
    "4-7-8 breathwork": {
      what: "A slow breathing pattern with a long hold and a longer exhale, used to prepare for sleep.",
      steps: [
        "Sit or lie comfortably. Rest the tip of your tongue behind your upper front teeth.",
        "Breathe in quietly through your nose for 4 counts.",
        "Hold your breath gently for 7 counts.",
        "Breathe out through your mouth with a soft whoosh for 8 counts. Do 4 rounds, then breathe normally."
      ],
      easier: "Breathe in for 4, hold for 4, and out for 6.",
      stop: "dizzy or light-headed. Return to normal breathing."
    },
    "Box breathing": {
      what: "Even breathing in four equal parts, which gives your attention something steady to follow.",
      steps: [
        "Sit or lie comfortably with your shoulders relaxed.",
        "Breathe in through your nose for 4 counts, then hold for 4 counts.",
        "Breathe out slowly for 4 counts, then pause for 4 counts.",
        "Repeat for the full time at a smooth, easy pace."
      ],
      easier: "Use 3 counts for each side of the box.",
      stop: "dizzy or light-headed. Return to normal breathing."
    },
    "Body scan": {
      what: "A slow sweep of attention from feet to head that releases tension you may not notice.",
      steps: [
        "Lie flat with your arms a little away from your sides and your eyes closed.",
        "Bring your attention to your feet and let them relax on the next exhale.",
        "Move up slowly through your calves, thighs, hips, belly, shoulders, arms and hands, about 20 to 30 seconds each.",
        "Finish by unclenching your jaw and softening the space between your eyebrows."
      ],
      easier: "Do it seated if lying down is uncomfortable.",
      stop: "anxious or light-headed. Return to normal breathing and open your eyes."
    },
    "Legs-up-the-wall sleep prep": {
      what: "Raising your legs gently returns blood toward your core and helps your breathing and heart rate settle before sleep.",
      steps: [
        "Sit sideways next to a wall with your hip close to it.",
        "Lie back and swing your legs up the wall as you turn to face it.",
        "Slide your hips as close to the wall as feels comfortable, with your arms by your sides and your palms up.",
        "Breathe slowly and let your legs and jaw go heavy."
      ],
      easier: "Rest your calves on a chair seat instead of the wall.",
      stop: "numbness, pins and needles, or pressure in your head."
    }
  };

  var api = {
    library: L,
    get: function (name) {
      return L[name] || {
        what: "A guided movement for this part of your routine.",
        steps: ["Move slowly and breathe steadily for the full time."],
        easier: "Reduce your range of motion or take more rest.",
        stop: "sharp pain, dizziness or numbness."
      };
    }
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.FeranaMoves = api;
})(typeof window !== "undefined" ? window : globalThis);
