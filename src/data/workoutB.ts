// src/data/workoutB.ts
import type { Workout } from './types'

export const workoutB: Workout = {
  id: "B",
  name: "Workout B: Lower Body + Full Body",
  subtitle: "Legs, glutes, and total-body strength",
  estimatedMinutes: 25,
  exercises: [
    // === WARM-UP ===
    {
      id: "b-warmup-march-in-place",
      name: "March in Place",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "march_in_place.gif",
      targetMuscles: "Hip flexors, cardiovascular warm-up",
      benefit: "Elevates your heart rate gradually and activates the hip flexors and core. Marching is one of the most joint-friendly ways to start a lower-body session.",
      tips: [
        "Drive your knees up to hip height with each step",
        "Pump your arms naturally to engage your upper body",
        "Set a comfortable, steady rhythm — this is a warm-up, not a sprint"
      ]
    },
    {
      id: "b-warmup-leg-swings",
      name: "Leg Swings",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "leg_swings.gif",
      targetMuscles: "Hip flexors, hamstrings, glutes",
      benefit: "Dynamically stretches the hip flexors and hamstrings, improving hip mobility before squatting and lunging. Essential for protecting the lower back during lower-body work.",
      tips: [
        "Hold a wall or chair for balance and swing each leg front to back",
        "Let the leg swing freely — don't force the range of motion",
        "Do half the time on each leg"
      ]
    },
    {
      id: "b-warmup-hip-circles",
      name: "Hip Circles",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "hip_circles.gif",
      targetMuscles: "Hips, glutes, lower back",
      benefit: "Mobilizes the hip joint in all planes of motion, lubricating the joint and activating the deep hip rotators. Reduces the risk of hip and knee injury during squats and lunges.",
      tips: [
        "Stand with hands on hips and draw large, slow circles with your pelvis",
        "Go in both directions — clockwise and counterclockwise",
        "Exaggerate the movement to get the full range of motion"
      ]
    },
    {
      id: "b-warmup-bodyweight-squats",
      name: "Bodyweight Squats (Slow)",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "bodyweight_squats_warmup.gif",
      targetMuscles: "Quads, glutes, hamstrings",
      benefit: "Activates the major lower-body muscle groups at low intensity, rehearsing the squat pattern before adding weight. Warms the knees and ankles, which are key joints in today's workout.",
      tips: [
        "Take 3-4 seconds to lower down and 2 seconds to rise — slow is the goal",
        "Keep your chest up and knees tracking over your toes",
        "Use the bottom of the squat to open your hips with a gentle pulse"
      ]
    },

    // === MAIN BLOCK ===
    {
      id: "b-main-goblet-squats",
      name: "Goblet Squats",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "goblet_squats.gif",
      targetMuscles: "Quads, glutes, core",
      benefit: "An excellent compound movement that works the quads and glutes while the goblet position naturally forces upright posture. Safer and more accessible than barbell squats, with similar strength benefits.",
      tips: [
        "Hold one dumbbell vertically at chest height with both hands",
        "Sit your hips back and down, keeping your chest tall",
        "Drive through your heels to stand, squeezing your glutes at the top"
      ],
      equipment: "Dumbbell"
    },
    {
      id: "b-main-reverse-lunges",
      name: "Reverse Lunges",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 10, perSide: true },
      gifFilename: "reverse_lunges.gif",
      targetMuscles: "Quads, glutes, balance",
      benefit: "Targets each leg independently, correcting muscle imbalances. Stepping backward (rather than forward) reduces knee stress and improves single-leg stability — critical for fall prevention as we age.",
      tips: [
        "Step one foot back and lower your back knee toward the floor",
        "Keep your front shin vertical — your knee should not travel past your toes",
        "Push through your front heel to return to standing"
      ]
    },
    {
      id: "b-main-glute-bridges",
      name: "Glute Bridges",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 15 },
      gifFilename: "glute_bridges.gif",
      targetMuscles: "Glutes, hamstrings",
      benefit: "Directly targets the glutes, which are the largest muscle group in the body. Strong glutes support the lower back, improve posture, and power every movement from walking to climbing stairs.",
      tips: [
        "Lie on your back with knees bent and feet flat, hip-width apart",
        "Press through your heels and squeeze your glutes as you lift your hips",
        "Hold for a beat at the top — don't just bounce up and down"
      ]
    },
    {
      id: "b-main-squat-to-press",
      name: "Squat to Press",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 10 },
      gifFilename: "squat_to_press.gif",
      targetMuscles: "Full body compound",
      benefit: "A time-efficient full-body movement that combines a lower-body squat with an upper-body overhead press. Burns more calories per rep than isolated exercises and builds functional strength.",
      tips: [
        "Hold dumbbells at shoulder height; squat deep, then press as you stand",
        "The press happens as you rise — use the momentum from your legs",
        "Keep your core braced throughout to protect your lower back"
      ],
      equipment: "Dumbbells"
    },
    {
      id: "b-main-standing-knee-to-elbow",
      name: "Standing Knee to Elbow",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12, perSide: true },
      gifFilename: "standing_knee_to_elbow.gif",
      targetMuscles: "Obliques, balance, hip flexors",
      benefit: "Works the obliques and hip flexors in a standing, functional position. Improves balance and coordination while activating the core in a way that transfers directly to everyday movement.",
      tips: [
        "Stand tall and bring one knee up while rotating your opposite elbow toward it",
        "Actually touch (or nearly touch) knee to elbow — the rotation is the point",
        "Keep a steady tempo and stay balanced on the standing leg"
      ]
    },
    {
      id: "b-main-sumo-squat",
      name: "Sumo Squat",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "sumo_squat.gif",
      targetMuscles: "Inner thighs, glutes",
      benefit: "The wide stance targets the inner thighs (adductors) and glutes from a different angle than regular squats. Inner thigh strength improves hip stability and is often undertrained in typical workouts.",
      tips: [
        "Take a wide stance with toes turned out 45 degrees",
        "Hold one dumbbell vertically in both hands between your legs",
        "Keep your back upright and knees tracking over your toes as you lower"
      ],
      equipment: "Dumbbell"
    },
    {
      id: "b-main-regular-crunches",
      name: "Regular Crunches",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 15 },
      gifFilename: "regular_crunches.gif",
      targetMuscles: "Upper abs",
      benefit: "Directly targets the rectus abdominis — the upper abdominal muscles. When done correctly, crunches are a safe and effective way to build ab strength and core stability.",
      tips: [
        "Place hands lightly behind your head — don't pull your neck",
        "Curl your chest toward your knees, not your head toward your knees",
        "Exhale as you crunch up, inhale as you lower slowly"
      ]
    },
    {
      id: "b-main-up-and-overs",
      name: "Up and Overs",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12, perSide: true },
      gifFilename: "up_and_overs.gif",
      targetMuscles: "Core, obliques",
      benefit: "A dynamic core exercise that works the obliques through a sweeping arc of motion. Targets the sides of your waist and builds the rotational strength that protects your spine during everyday twisting movements.",
      tips: [
        "Lie on your back, extend arms overhead, and sweep them in an arc up and over to one side",
        "Let your legs and torso follow in one fluid, controlled motion",
        "Return through center before going to the other side"
      ]
    },
    {
      id: "b-main-side-lunges",
      name: "Side Lunges",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 10, perSide: true },
      gifFilename: "side_lunges.gif",
      targetMuscles: "Inner and outer thighs, glutes",
      benefit: "The lateral movement pattern strengthens the inner and outer thighs — muscles that are rarely challenged in forward/backward exercises. Critical for knee stability and lateral movement in everyday life.",
      tips: [
        "Step wide to one side and bend that knee, keeping the other leg straight",
        "Keep your chest up and the bent knee tracking over your toes",
        "Push off your bent-knee foot to return to standing"
      ]
    },
    {
      id: "b-main-front-and-side-squeeze",
      name: "Front and Side Squeeze",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "front_and_side_squeeze.gif",
      targetMuscles: "Shoulders, upper back, posture",
      benefit: "Combines a front raise with a lateral raise, hitting all three heads of the deltoid. Strengthens the muscles responsible for shoulder stability and good posture — especially important for desk workers.",
      tips: [
        "Use light weights — form breaks down quickly with too much weight here",
        "Alternate between raising arms to the front and raising to the sides",
        "Keep a slight bend in the elbows and avoid shrugging your shoulders"
      ],
      equipment: "Dumbbells"
    },

    // === COOL-DOWN ===
    {
      id: "b-cooldown-standing-quad-stretch",
      name: "Standing Quad Stretch",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 30, perSide: true },
      gifFilename: "standing_quad_stretch.gif",
      targetMuscles: "Quadriceps, hip flexors",
      benefit: "Lengthens the quadriceps and hip flexors after the intense lower-body work. Tight quads contribute to knee pain and poor posture — this stretch is essential after any squat-heavy session.",
      tips: [
        "Stand on one leg, pull the other foot toward your glute, and hold",
        "Keep knees together and stand tall — don't lean forward",
        "Use a wall for balance if needed — there is no shame in that"
      ]
    },
    {
      id: "b-cooldown-figure-four-stretch",
      name: "Figure-Four Stretch",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 30, perSide: true },
      gifFilename: "figure_four_stretch.gif",
      targetMuscles: "Glutes, hip rotators, piriformis",
      benefit: "Targets the piriformis and glute medius — deep hip muscles that tighten significantly during lunges, squats, and bridges. Releasing these reduces lower back tension and sciatic nerve irritation.",
      tips: [
        "Lie on your back, cross one ankle over the opposite knee",
        "Flex the crossed foot to protect your knee joint",
        "Pull the uncrossed leg toward your chest to deepen the stretch"
      ]
    },
    {
      id: "b-cooldown-seated-forward-fold",
      name: "Seated Forward Fold",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "seated_forward_fold.gif",
      targetMuscles: "Hamstrings, lower back, calves",
      benefit: "A classic stretch that decompresses the spine and lengthens the entire posterior chain — hamstrings, calves, and lower back. The seated position eliminates balance demands so you can fully relax into the stretch.",
      tips: [
        "Sit with legs extended and hinge forward from your hips, not your waist",
        "Reach toward your feet and hold wherever you can comfortably — even shins is great",
        "Let gravity do the work; don't force or bounce the stretch"
      ]
    },
    {
      id: "b-cooldown-deep-breathing",
      name: "Deep Breathing + Body Scan",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "deep_breathing.gif",
      targetMuscles: "Full body recovery",
      benefit: "Activates the parasympathetic nervous system, bringing your heart rate and cortisol levels down. The body scan helps you notice where you hold tension and consciously release it — a skill that benefits sleep and stress management.",
      tips: [
        "Lie on your back or sit comfortably — close your eyes if that feels good",
        "Inhale slowly for 4 counts, hold for 2, exhale for 6",
        "On each exhale, scan from your toes to your head and let each body part soften"
      ]
    }
  ]
}
