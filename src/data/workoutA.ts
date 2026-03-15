// src/data/workoutA.ts
import type { Workout } from './types'

export const workoutA: Workout = {
  id: "A",
  name: "Workout A: Upper Body + Core",
  subtitle: "Arms, shoulders, and core strength",
  estimatedMinutes: 25,
  exercises: [
    // === WARM-UP ===
    {
      id: "a-warmup-step-jacks",
      name: "Step Jacks",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "step_jacks.gif",
      targetMuscles: "Full body, cardiovascular warm-up",
      benefit: "Gets your heart rate up and warms your legs and arms together. A gentler alternative to jumping jacks that's easier on your joints.",
      tips: [
        "Step side to side at a comfortable pace — no need to rush",
        "Let your arms swing naturally to shoulder height",
        "Focus on breathing steadily throughout"
      ]
    },
    {
      id: "a-warmup-arm-circles",
      name: "Arm Circles",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "arm_circles.gif",
      targetMuscles: "Shoulders, upper back",
      benefit: "Lubricates the shoulder joints and increases blood flow to the muscles you'll be working in the main block. Starts small and progressively opens up range of motion.",
      tips: [
        "Start with small circles and gradually make them bigger",
        "Do half the time forward, then reverse direction",
        "Keep your core lightly engaged and stand tall"
      ]
    },
    {
      id: "a-warmup-torso-twists",
      name: "Torso Twists",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "torso_twists.gif",
      targetMuscles: "Obliques, spine, core",
      benefit: "Mobilizes the thoracic spine and warms the obliques. Helps counteract the stiffness that builds up from sitting and prepares your core for rotation-based exercises.",
      tips: [
        "Rotate from your torso, not just your hips",
        "Keep your feet hip-width apart and knees soft",
        "Move at a controlled, rhythmic pace — not too fast"
      ]
    },
    {
      id: "a-warmup-shoulder-roll-reach",
      name: "Shoulder Roll + Reach",
      phase: "warmup",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "shoulder_roll_reach.gif",
      targetMuscles: "Shoulders, upper back, chest",
      benefit: "Releases tension in the upper traps and opens up the chest. The reach component activates the serratus anterior, which stabilizes the shoulder blade during pressing movements.",
      tips: [
        "Roll shoulders backward in full circles before reaching forward",
        "Reach both arms forward like you're pushing something away, then relax",
        "Breathe in as you roll back, out as you reach forward"
      ]
    },

    // === MAIN BLOCK ===
    {
      id: "a-main-bicep-curls",
      name: "Bicep Curls",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "bicep_curls.gif",
      targetMuscles: "Biceps",
      benefit: "Builds arm strength and definition in the biceps — the muscles at the front of your upper arm. Strong biceps support everyday lifting tasks like carrying groceries or picking up children.",
      tips: [
        "Keep your elbows tucked close to your sides — they're the pivot point",
        "Fully lower the weight on each rep for maximum muscle engagement",
        "Avoid swinging your torso to lift — if you are, the weight is too heavy"
      ],
      equipment: "Dumbbells"
    },
    {
      id: "a-main-tricep-kickbacks",
      name: "Tricep Kickbacks",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "tricep_kickbacks.gif",
      targetMuscles: "Triceps",
      benefit: "Targets the triceps — the muscles that make up two-thirds of your upper arm. Toning these creates visible arm definition and supports pushing movements like push-ups and overhead press.",
      tips: [
        "Hinge forward from your hips and keep your back flat",
        "Hold your upper arm parallel to the floor throughout the movement",
        "Squeeze at the top when your arm is fully extended"
      ],
      equipment: "Dumbbells"
    },
    {
      id: "a-main-overhead-press",
      name: "Overhead Press",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 10 },
      gifFilename: "overhead_press.gif",
      targetMuscles: "Shoulders, triceps",
      benefit: "A powerful compound movement that builds shoulder strength and stability. Strong shoulders protect your rotator cuff and improve posture, especially important as we age.",
      tips: [
        "Start with dumbbells at shoulder height, palms facing forward",
        "Press straight up without arching your lower back — brace your core",
        "Lower slowly and with control for maximum benefit"
      ],
      equipment: "Dumbbells"
    },
    {
      id: "a-main-push-ups",
      name: "Push-Ups",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 8 },
      gifFilename: "push_ups.gif",
      targetMuscles: "Chest, shoulders, triceps",
      benefit: "A classic compound movement that simultaneously works your chest, shoulders, and triceps while requiring core stability. Knees-down modification is just as effective for building strength.",
      tips: [
        "Keep your body in a straight line from head to knees (or heels)",
        "Lower your chest to just above the floor, elbows at roughly 45 degrees",
        "If full push-ups are too hard today, knees down is the smart choice — not the easy choice"
      ]
    },
    {
      id: "a-main-lateral-raises",
      name: "Lateral Raises",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "lateral_raises.gif",
      targetMuscles: "Shoulders (medial deltoid)",
      benefit: "Isolates the side of the shoulder, which is responsible for that rounded, defined shoulder shape. This is the move that creates visible shoulder definition and improves overhead reach.",
      tips: [
        "Use lighter weights — this is an isolation move, not a strength move",
        "Lead with your elbows, not your wrists, and stop at shoulder height",
        "A slight bend in the elbows reduces joint stress"
      ],
      equipment: "Dumbbells"
    },
    {
      id: "a-main-plank-hold",
      name: "Plank Hold",
      phase: "main",
      format: { type: "duration", sets: 3, seconds: 30 },
      gifFilename: "plank_hold.gif",
      targetMuscles: "Core, shoulders",
      benefit: "Builds deep core stability and shoulder endurance simultaneously. A strong plank position transfers to better performance in almost every other exercise and reduces lower back strain.",
      tips: [
        "Keep your hips level — no sagging down or piking up",
        "Press the floor away with your forearms and keep your shoulders over your elbows",
        "Breathe steadily — if you are holding your breath, that is a sign to rest"
      ]
    },
    {
      id: "a-main-bicycle-crunches",
      name: "Bicycle Crunches",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 15, perSide: true },
      gifFilename: "bicycle_crunches.gif",
      targetMuscles: "Obliques, core",
      benefit: "One of the most effective exercises for the obliques and rectus abdominis. The rotation pattern is functional — it mimics how your core naturally moves in daily life.",
      tips: [
        "Slow down — most people rush this exercise and lose the benefit",
        "Focus on rotating your ribcage toward the opposite knee, not just your elbow",
        "Keep your lower back pressed into the floor throughout"
      ]
    },
    {
      id: "a-main-dead-bug",
      name: "Dead Bug",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 10, perSide: true },
      gifFilename: "dead_bug.gif",
      targetMuscles: "Deep core, stability",
      benefit: "Activates the deep stabilizing muscles of the core — the transverse abdominis — which act as a natural corset. This is the foundation of real core strength and spine protection.",
      tips: [
        "Press your lower back firmly into the floor before moving — keep it there",
        "Move the opposite arm and leg simultaneously, slowly and with control",
        "Exhale as you extend; if your back lifts off, shorten the range of motion"
      ]
    },
    {
      id: "a-main-hammer-curls",
      name: "Hammer Curls",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "hammer_curls.gif",
      targetMuscles: "Biceps, forearms",
      benefit: "Targets the brachialis (a muscle under the bicep) and forearms in addition to the bicep. This creates fuller, more defined arms and improves grip strength for everyday tasks.",
      tips: [
        "Hold the dumbbells with palms facing each other (neutral grip) throughout",
        "Keep your elbows pinned at your sides just like a standard curl",
        "Can be done alternating arms or both at once — your choice"
      ],
      equipment: "Dumbbells"
    },
    {
      id: "a-main-tricep-overhead-extension",
      name: "Tricep Overhead Extension",
      phase: "main",
      format: { type: "reps", sets: 3, reps: 12 },
      gifFilename: "tricep_overhead_extension.gif",
      targetMuscles: "Triceps",
      benefit: "Stretches and strengthens the tricep through a full range of motion — especially the long head, which isn't fully targeted in kickbacks. This is the finishing move for fully toned arms.",
      tips: [
        "Hold one dumbbell with both hands overhead, then lower behind your head",
        "Keep your elbows pointing straight up — don't let them flare out",
        "Move slowly on the way down to control the stretch"
      ],
      equipment: "Dumbbells"
    },

    // === COOL-DOWN ===
    {
      id: "a-cooldown-cross-body-shoulder-stretch",
      name: "Cross-Body Shoulder Stretch",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 30, perSide: true },
      gifFilename: "cross_body_shoulder_stretch.gif",
      targetMuscles: "Shoulders, upper back",
      benefit: "Releases the posterior shoulder capsule, which tightens during pressing and lifting movements. Maintaining shoulder mobility reduces injury risk and improves posture over time.",
      tips: [
        "Pull your arm across your chest with gentle pressure from the opposite hand",
        "Keep your shoulder down — avoid shrugging up toward your ear",
        "Breathe slowly and let the tension release on each exhale"
      ]
    },
    {
      id: "a-cooldown-overhead-tricep-stretch",
      name: "Overhead Tricep Stretch",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 30, perSide: true },
      gifFilename: "overhead_tricep_stretch.gif",
      targetMuscles: "Triceps, shoulder",
      benefit: "Lengthens the tricep and the back of the shoulder after the overhead work in today's session. Helps reduce next-day muscle soreness and maintains flexibility in the upper arm.",
      tips: [
        "Raise one arm overhead and bend the elbow so your hand drops behind your head",
        "Use the opposite hand to gently pull the elbow back and deepen the stretch",
        "Keep a tall spine — don't lean to the side"
      ]
    },
    {
      id: "a-cooldown-cat-cow-stretch",
      name: "Cat-Cow Stretch",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "cat_cow_stretch.gif",
      targetMuscles: "Spine, core, back",
      benefit: "Gently mobilizes the entire spine from neck to tailbone. This counter-movement relieves the compression and rigidity that builds up during exercises like planks and dead bugs.",
      tips: [
        "Cow: inhale and let your belly drop, lifting your head and tailbone",
        "Cat: exhale and round your spine, tucking chin to chest and pelvis under",
        "Move slowly and sync the breath to the movement — this is your wind-down"
      ]
    },
    {
      id: "a-cooldown-child-pose",
      name: "Child's Pose",
      phase: "cooldown",
      format: { type: "duration", sets: 1, seconds: 45 },
      gifFilename: "child_pose.gif",
      targetMuscles: "Back, hips, shoulders",
      benefit: "A full-body restorative stretch that decompresses the spine, opens the hips, and stretches the lats and shoulders. Signals to your nervous system that the work is done and it is safe to relax.",
      tips: [
        "Kneel and sit back toward your heels, extending arms long in front of you",
        "Let your forehead rest on the floor or a pillow",
        "Take slow, deep belly breaths and feel the stretch deepen with each exhale"
      ]
    }
  ]
}
