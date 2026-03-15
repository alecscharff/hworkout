# Architecture Plan: hworkout -- Toning Workout Web App

## Overview

A single-page workout web app designed for a 40-year-old woman focused on arm toning, core strength, general wellness, and injury prevention. The app offers two alternating workouts (A and B), each ~25 minutes, with a warm-up and cool-down/stretch phase. It follows a Madfit-inspired format: approachable, music-friendly pacing, compound + isolation exercises, no auto-advancing timers. Built as a static client-side app (no backend) using React + TypeScript + Vite.

---

## Research Summary (Informing Exercise Selection)

### What Science/Trainers Recommend for Women 40+
- Combine compound movements (squats, lunges, push-ups) with isolation moves (bicep curls, tricep kickbacks, lateral raises)
- 3 sets of 8-15 reps per exercise, or timed intervals of 30-45 seconds
- Progressive overload matters more than exercise novelty
- Declining estrogen accelerates muscle loss; resistance training is critical for maintaining lean muscle, metabolism, and joint health
- Train major muscle groups 2-3x/week with 48 hours between intense sessions

### Injury Prevention Principles
- Always warm up 5 minutes with dynamic movements mimicking the workout
- Prioritize form over load -- technique first, then increase intensity
- Soreness is OK; sharp pain is not -- the app should reinforce this
- Structured variation (alternating A/B workouts) reduces overuse injury risk
- Cool down with 3-5 minutes of static stretching while muscles are warm
- Joint mobility work is especially important for 40+ (wrists, shoulders, hips)

### 25-Minute Session Structure
- Warm-up: 3-5 minutes (dynamic stretches, light cardio)
- Main block: 15-18 minutes (8-10 exercises)
- Cool-down/stretch: 3-5 minutes (static stretches, breathing)

### Madfit Style Elements to Incorporate
- Follow-along feel: one exercise at a time, clear instructions
- Compound + isolation mix for efficiency
- "Consistency beats intensity" philosophy -- scale moves, don't skip
- Fun, approachable energy; not drill-sergeant vibes
- Structured but not rigid -- user controls the pace

---

## Workout A & B Exercise Lists

### Workout A: Upper Body + Core Focus

**Warm-Up (4 min)**

| # | Exercise | Duration | GIF Filename |
|---|----------|----------|--------------|
| 1 | Step Jacks | 45 sec | `step_jacks.gif` |
| 2 | Arm Circles (small to big) | 45 sec | `arm_circles.gif` |
| 3 | Torso Twists | 45 sec | `torso_twists.gif` |
| 4 | Shoulder Roll + Reach | 45 sec | `shoulder_roll_reach.gif` |

**Main Block (18 min)**

| # | Exercise | Format | GIF Filename | Primary Target |
|---|----------|--------|--------------|----------------|
| 1 | Bicep Curls (dumbbells) | 3x12 | `bicep_curls.gif` | Biceps |
| 2 | Tricep Kickbacks (dumbbells) | 3x12 | `tricep_kickbacks.gif` | Triceps |
| 3 | Overhead Press (dumbbells) | 3x10 | `overhead_press.gif` | Shoulders, triceps |
| 4 | Push-Ups (knees or full) | 3x8 | `push_ups.gif` | Chest, shoulders, triceps |
| 5 | Lateral Raises (dumbbells) | 3x12 | `lateral_raises.gif` | Shoulders (medial deltoid) |
| 6 | Plank Hold | 3x30 sec | `plank_hold.gif` | Core, shoulders |
| 7 | Bicycle Crunches | 3x15/side | `bicycle_crunches.gif` | Obliques, core |
| 8 | Dead Bug | 3x10/side | `dead_bug.gif` | Deep core, stability |
| 9 | Hammer Curls (dumbbells) | 3x12 | `hammer_curls.gif` | Biceps, forearms |
| 10 | Tricep Overhead Extension (dumbbell) | 3x12 | `tricep_overhead_extension.gif` | Triceps |

**Cool-Down (3 min)**

| # | Exercise | Duration | GIF Filename |
|---|----------|----------|--------------|
| 1 | Cross-Body Shoulder Stretch | 30 sec/side | `cross_body_shoulder_stretch.gif` |
| 2 | Overhead Tricep Stretch | 30 sec/side | `overhead_tricep_stretch.gif` |
| 3 | Cat-Cow Stretch | 45 sec | `cat_cow_stretch.gif` |
| 4 | Child's Pose | 45 sec | `child_pose.gif` |

---

### Workout B: Lower Body + Full Body Focus

**Warm-Up (4 min)**

| # | Exercise | Duration | GIF Filename |
|---|----------|----------|--------------|
| 1 | March in Place | 45 sec | `march_in_place.gif` |
| 2 | Leg Swings (front/back) | 45 sec | `leg_swings.gif` |
| 3 | Hip Circles | 45 sec | `hip_circles.gif` |
| 4 | Bodyweight Squats (slow) | 45 sec | `bodyweight_squats_warmup.gif` |

**Main Block (18 min)**

| # | Exercise | Format | GIF Filename | Primary Target |
|---|----------|--------|--------------|----------------|
| 1 | Goblet Squats (dumbbell) | 3x12 | `goblet_squats.gif` | Quads, glutes, core |
| 2 | Reverse Lunges | 3x10/side | `reverse_lunges.gif` | Quads, glutes, balance |
| 3 | Glute Bridges | 3x15 | `glute_bridges.gif` | Glutes, hamstrings |
| 4 | Squat to Press (dumbbells) | 3x10 | `squat_to_press.gif` | Full body compound |
| 5 | Standing Knee to Elbow | 3x12/side | `standing_knee_to_elbow.gif` | Obliques, balance, hip flexors |
| 6 | Sumo Squat (dumbbell) | 3x12 | `sumo_squat.gif` | Inner thighs, glutes |
| 7 | Regular Crunches | 3x15 | `regular_crunches.gif` | Upper abs |
| 8 | Up and Overs | 3x12/side | `up_and_overs.gif` | Core, obliques |
| 9 | Side Lunges | 3x10/side | `side_lunges.gif` | Inner/outer thighs, glutes |
| 10 | Front and Side Squeeze | 3x12 | `front_and_side_squeeze.gif` | Shoulders, upper back, posture |

**Cool-Down (3 min)**

| # | Exercise | Duration | GIF Filename |
|---|----------|----------|--------------|
| 1 | Standing Quad Stretch | 30 sec/side | `standing_quad_stretch.gif` |
| 2 | Figure-Four Stretch | 30 sec/side | `figure_four_stretch.gif` |
| 3 | Seated Forward Fold | 45 sec | `seated_forward_fold.gif` |
| 4 | Deep Breathing + Body Scan | 45 sec | `deep_breathing.gif` |

---

## Complete GIF Filename List

Save all GIF files to `public/gifs/`. The app references them by filename.

```
# Workout A - Warm-Up
step_jacks.gif
arm_circles.gif
torso_twists.gif
shoulder_roll_reach.gif

# Workout A - Main
bicep_curls.gif
tricep_kickbacks.gif
overhead_press.gif
push_ups.gif
lateral_raises.gif
plank_hold.gif
bicycle_crunches.gif
dead_bug.gif
hammer_curls.gif
tricep_overhead_extension.gif

# Workout A - Cool-Down
cross_body_shoulder_stretch.gif
overhead_tricep_stretch.gif
cat_cow_stretch.gif
child_pose.gif

# Workout B - Warm-Up
march_in_place.gif
leg_swings.gif
hip_circles.gif
bodyweight_squats_warmup.gif

# Workout B - Main
goblet_squats.gif
reverse_lunges.gif
glute_bridges.gif
squat_to_press.gif
standing_knee_to_elbow.gif
sumo_squat.gif
regular_crunches.gif
up_and_overs.gif
side_lunges.gif
front_and_side_squeeze.gif

# Workout B - Cool-Down
standing_quad_stretch.gif
figure_four_stretch.gif
seated_forward_fold.gif
deep_breathing.gif
```

**Total: 36 GIF files** (18 per workout)

---

## Tech Stack

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Framework | React 18 + TypeScript | Widely known, component model fits exercise cards well |
| Build tool | Vite | Fast dev server, zero-config for React+TS |
| Styling | CSS Modules (plain CSS) | No extra dependencies, easy to customize palette, keeps bundle tiny |
| State management | React Context + useReducer | Simple enough for this app; no Redux needed |
| Routing | React Router v6 | Small, well-understood; needed for workout/exercise navigation |
| Persistence | localStorage | Save workout progress, last workout completed (A or B) |
| Deployment | Static files (Vercel, Netlify, or GitHub Pages) | No server needed |
| Package manager | npm | Default, no special needs |

---

## File & Folder Structure

```
hworkout/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── gifs/
│       ├── step_jacks.gif
│       ├── arm_circles.gif
│       └── ... (all 36 GIF files)
├── src/
│   ├── main.tsx                    # Entry point, mounts <App />
│   ├── App.tsx                     # Router setup, global providers
│   ├── App.module.css              # Global layout styles
│   ├── data/
│   │   ├── workoutA.ts             # Workout A exercise definitions
│   │   ├── workoutB.ts             # Workout B exercise definitions
│   │   └── types.ts                # TypeScript types/interfaces
│   ├── context/
│   │   └── WorkoutContext.tsx       # Workout state (current exercise, completions, skips)
│   ├── hooks/
│   │   ├── useTimer.ts             # Start/stop/reset timer hook
│   │   └── useWorkoutProgress.ts   # Read/write progress to localStorage
│   ├── pages/
│   │   ├── HomePage.tsx            # Landing: pick Workout A or B
│   │   ├── HomePage.module.css
│   │   ├── WorkoutOverviewPage.tsx # Shows all exercises in chosen workout
│   │   ├── WorkoutOverviewPage.module.css
│   │   ├── ExercisePage.tsx        # Single exercise view (GIF, tips, timer, buttons)
│   │   ├── ExercisePage.module.css
│   │   ├── CompletePage.tsx        # Workout complete celebration
│   │   └── CompletePage.module.css
│   ├── components/
│   │   ├── ExerciseCard.tsx        # Card used in overview list
│   │   ├── ExerciseCard.module.css
│   │   ├── Timer.tsx               # Display + start/stop/reset controls
│   │   ├── Timer.module.css
│   │   ├── ProgressBar.tsx         # Shows exercise X of Y
│   │   ├── ProgressBar.module.css
│   │   ├── EncouragementBanner.tsx # Rotating positive messages
│   │   └── EncouragementBanner.module.css
│   ├── utils/
│   │   └── encouragement.ts        # Array of encouragement messages + selector
│   └── styles/
│       ├── variables.css           # CSS custom properties (palette, spacing, fonts)
│       └── reset.css               # Minimal CSS reset
```

---

## Data Model (TypeScript Types)

```typescript
// src/data/types.ts

/** Phase within a workout */
export type ExercisePhase = "warmup" | "main" | "cooldown";

/** How the exercise is measured */
export type ExerciseFormat =
  | { type: "reps"; sets: number; reps: number; perSide?: boolean }
  | { type: "duration"; sets: number; seconds: number; perSide?: boolean };

/** A single exercise definition */
export interface Exercise {
  id: string;                   // unique, e.g. "a-main-bicep-curls"
  name: string;                 // display name, e.g. "Bicep Curls"
  phase: ExercisePhase;
  format: ExerciseFormat;
  gifFilename: string;          // e.g. "bicep_curls.gif"
  targetMuscles: string;        // e.g. "Biceps"
  benefit: string;              // 1-2 sentence description of what this works and why
  tips: [string, string, string]; // exactly 3 form tips
  equipment?: string;           // e.g. "Dumbbells" or undefined for bodyweight
}

/** A complete workout (A or B) */
export interface Workout {
  id: "A" | "B";
  name: string;                 // "Workout A: Upper Body + Core"
  subtitle: string;             // "Arms, shoulders, and core strength"
  exercises: Exercise[];
  estimatedMinutes: number;     // 25
}

/** Status of a single exercise in an active session */
export type ExerciseStatus = "pending" | "complete" | "skipped";

/** State of an in-progress workout session */
export interface WorkoutSession {
  workoutId: "A" | "B";
  currentExerciseIndex: number;
  statuses: ExerciseStatus[];   // parallel array to workout.exercises
  startedAt: string;            // ISO timestamp
}

/** Persisted to localStorage */
export interface PersistedProgress {
  lastCompletedWorkout: "A" | "B" | null;
  lastCompletedDate: string | null;  // ISO date string
  totalWorkoutsCompleted: number;
  history: Array<{
    workoutId: "A" | "B";
    date: string;
    exercisesCompleted: number;
    exercisesSkipped: number;
    totalExercises: number;
  }>;
}
```

---

## Page/Component Specifications

### 1. HomePage (`/`)

**Purpose:** Landing screen. Greet the user, suggest which workout to do next, let them pick.

**Data needed:** `PersistedProgress` from localStorage.

**Contains:**
- App title: "hworkout"
- Subtitle: "Your toning routine"
- Two large cards: Workout A and Workout B
  - Each card shows: workout name, subtitle, number of exercises, estimated time
  - Suggested workout has a subtle "Up next" badge (alternates A/B based on last completed)
- If history exists, show a small "streak" or count: "You've completed X workouts"
- Warm, welcoming tone

**Behavior:**
- Tapping a workout card navigates to `/workout/:id/overview`

---

### 2. WorkoutOverviewPage (`/workout/:id/overview`)

**Purpose:** Show the full exercise list before starting. Let user mentally prepare and see what's coming.

**Data needed:** `Workout` object for the chosen workout.

**Contains:**
- Workout name and subtitle at top
- Three sections with headers: "Warm-Up", "Main Workout", "Cool-Down"
- Each exercise shown as an `ExerciseCard`: name, target muscles, format summary (e.g. "3x12" or "3x30s")
- A large "Let's Go" button at the bottom to start
- A back arrow to return home

**Behavior:**
- "Let's Go" creates a new `WorkoutSession` in context and navigates to `/workout/:id/exercise/0`

---

### 3. ExercisePage (`/workout/:id/exercise/:index`)

**Purpose:** The core screen. Shows one exercise at a time with GIF, tips, timer, and action buttons.

**Data needed:** Current `Exercise`, `WorkoutSession` state, exercise index.

**Contains:**
- **Progress bar** at top: "Exercise 3 of 18" with a filled bar
- **Phase badge**: "Warm-Up", "Main Workout", or "Cool-Down" (color-coded)
- **Exercise name** (large heading)
- **GIF area**: Shows the exercise GIF. If file is missing, show a placeholder with the exercise name
- **Target/benefit blurb**: e.g. "Targets your biceps. Building arm strength supports everyday lifting and improves muscle definition."
- **Format display**: "3 sets of 12 reps" or "Hold for 30 seconds, 3 sets"
- **Form tips**: Numbered list of 3 tips
- **Timer component**:
  - Large digital display (MM:SS)
  - Start/Pause toggle button
  - Reset button (small, secondary)
  - Timer counts UP from 00:00 (not a countdown -- user controls their own pace)
- **Action buttons** (bottom, sticky):
  - [Mark Complete] -- primary sage button, advances to next exercise
  - [Skip] -- secondary/text button, advances to next exercise
- **Encouragement banner**: Appears when marking complete (not on skip). Shows a random encouraging message for ~2 seconds.

**Behavior:**
- "Mark Complete" sets status to `complete`, shows encouragement, then navigates to next exercise after a brief moment (1.5s)
- "Skip" sets status to `skipped`, immediately navigates to next exercise
- If this is the last exercise, both buttons navigate to `/workout/:id/complete`
- Timer is fully manual -- no auto-start, no auto-advance
- Back button navigates to previous exercise (maintains status)

---

### 4. CompletePage (`/workout/:id/complete`)

**Purpose:** Celebrate finishing the workout. Show a summary.

**Data needed:** `WorkoutSession` (statuses), `Workout` definition.

**Contains:**
- Celebration heading: "Workout Complete!" or "Great job!"
- Summary stats: exercises completed, exercises skipped, total time (from session start to now)
- An encouraging closing message (randomly selected)
- "Back to Home" button
- Subtle confetti or a simple animation (CSS-only, keep it light)

**Behavior:**
- On mount: persist completion to localStorage (update `PersistedProgress`)
- "Back to Home" navigates to `/` and clears the session from context

---

### 5. Timer Component

**Props:** None (self-contained)

**State:** `isRunning: boolean`, `elapsedSeconds: number`

**Behavior:**
- Counts up in 1-second increments using `setInterval` when running
- "Start" becomes "Pause" when running
- "Reset" sets elapsed back to 0 and stops the timer
- Cleans up interval on unmount
- Display format: `MM:SS`

---

### 6. ProgressBar Component

**Props:** `current: number`, `total: number`

**Renders:** A horizontal bar filled to `(current/total) * 100%` with a label like "5 of 18"

---

### 7. EncouragementBanner Component

**Props:** `visible: boolean`, `message: string`

**Renders:** A banner that slides in from the top, displays the message for ~2 seconds, then slides out. Uses CSS transitions.

---

### 8. ExerciseCard Component

**Props:** `exercise: Exercise`, `index: number`, `status?: ExerciseStatus`

**Renders:** A card showing exercise name, target muscles, format. If status is provided, shows a checkmark (complete) or skip icon. Used in WorkoutOverviewPage.

---

## Design System / CSS Variables

```css
/* src/styles/variables.css */
:root {
  /* Palette */
  --color-sage: #A8BFA0;           /* Primary -- buttons, accents */
  --color-sage-light: #C5D4BF;     /* Hover states, backgrounds */
  --color-sage-dark: #7A9470;      /* Active states, text on light */
  --color-coral: #E8A598;          /* Accent -- badges, highlights */
  --color-coral-light: #F2C4BB;    /* Soft accent backgrounds */
  --color-warm-white: #FAF8F5;     /* Page background */
  --color-cream: #F3EDE4;          /* Card backgrounds */
  --color-text-primary: #3D3D3D;   /* Main text */
  --color-text-secondary: #6B6B6B; /* Secondary text */
  --color-text-light: #9A9A9A;     /* Muted text */
  --color-white: #FFFFFF;

  /* Typography */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.25rem;    /* 20px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-2xl: 2rem;      /* 32px */
  --font-size-timer: 3rem;    /* 48px -- timer display */

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  /* Layout */
  --max-width: 480px;           /* Mobile-first, max content width */
  --border-radius: 12px;
  --border-radius-sm: 8px;
  --border-radius-pill: 999px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-button: 0 2px 4px rgba(0, 0, 0, 0.08);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}
```

---

## Key UX Decisions

### Timer Behavior
- Timer counts UP, not down. This avoids pressure and lets the user work at their own pace.
- Timer is purely informational -- it does not gate any actions. The user can mark complete or skip at any time regardless of timer state.
- Timer auto-resets when navigating to a new exercise.
- Timer state is NOT persisted. If the user leaves and comes back, it resets.

### Completion Flow
- "Mark Complete" triggers a brief encouragement banner (1.5 seconds), then auto-advances.
- "Skip" advances immediately with no fanfare -- no guilt, no judgment.
- The user can navigate back to previous exercises and change their status.
- The final screen shows a summary but keeps it positive -- focuses on what was completed, not what was skipped.

### Encouragement Copy Style
Warm, genuine, not over-the-top. Like a supportive friend, not a cheerleader. Examples:

```typescript
// src/utils/encouragement.ts
export const encouragementMessages: string[] = [
  "Nice work! You're building real strength.",
  "That's the way. Every rep counts.",
  "Strong and steady. Keep it up!",
  "You showed up, and that's what matters.",
  "Feeling good? You should -- that was great.",
  "One more in the books. You've got this.",
  "Your muscles are thanking you right now.",
  "Consistency is your superpower.",
  "Look at you go. Solid effort!",
  "That's progress you can feel.",
  "You're doing something great for yourself.",
  "Strength looks good on you.",
];

export function getRandomEncouragement(): string {
  return encouragementMessages[
    Math.floor(Math.random() * encouragementMessages.length)
  ];
}
```

### No Auto-Advance Between Exercises
The user fully controls pacing. No countdown timers between exercises, no "3... 2... 1..." transitions. The user reads the tips, starts when ready, and marks complete when done. This respects the user's autonomy and reduces anxiety.

### Workout Alternation
The home screen suggests the opposite workout from what was last completed. If no history, suggest Workout A. This is a suggestion only -- the user can always pick either workout.

### Phase Transitions
When moving from warm-up to main, or main to cool-down, show a brief interstitial message:
- "Warm-up complete. Time to work!" (warm-up -> main)
- "Main workout done. Let's stretch it out." (main -> cool-down)

These appear as a styled banner on the ExercisePage, not as a separate page.

---

## Routing

```
/                                  -> HomePage
/workout/:id/overview              -> WorkoutOverviewPage  (id = "A" or "B")
/workout/:id/exercise/:index       -> ExercisePage          (index = 0-based)
/workout/:id/complete              -> CompletePage
```

---

## Implementation Steps

These are ordered for a code-writer to execute sequentially.

### Phase 1: Project Setup
1. **Initialize project**: Run `npm create vite@latest . -- --template react-ts` inside `hworkout/`
2. **Install dependencies**: `npm install react-router-dom` (only extra dependency needed)
3. **Clean up Vite boilerplate**: Remove default App.tsx content, default CSS, Vite logo assets
4. **Create folder structure**: Create all directories listed in the file structure above
5. **Create `public/gifs/` directory** with a placeholder `.gitkeep` file (GIFs added later)
6. **Set up CSS foundation**: Create `src/styles/variables.css` and `src/styles/reset.css`
7. **Import styles in `main.tsx`**: Import reset.css then variables.css before App

### Phase 2: Data Layer
8. **Create `src/data/types.ts`**: Define all TypeScript interfaces and types (copy from Data Model section above)
9. **Create `src/data/workoutA.ts`**: Export a `Workout` object with all 18 exercises (4 warm-up, 10 main, 4 cool-down) including names, GIF filenames, tips, benefits, and format. Use the exercise tables from this document.
10. **Create `src/data/workoutB.ts`**: Same structure for Workout B exercises
11. **Create `src/utils/encouragement.ts`**: Export the messages array and `getRandomEncouragement()` function

### Phase 3: State Management
12. **Create `src/context/WorkoutContext.tsx`**: Implement a React Context + useReducer that manages `WorkoutSession` state. Actions: `START_WORKOUT`, `COMPLETE_EXERCISE`, `SKIP_EXERCISE`, `GO_TO_EXERCISE`, `RESET_SESSION`
13. **Create `src/hooks/useTimer.ts`**: Implement start/pause/reset timer hook using `useState` + `useEffect` + `setInterval`. Return `{ elapsedSeconds, isRunning, start, pause, reset }`
14. **Create `src/hooks/useWorkoutProgress.ts`**: Hook that reads/writes `PersistedProgress` to localStorage under key `"hworkout-progress"`. Functions: `getProgress()`, `recordCompletion(session)`, `getLastWorkout()`

### Phase 4: Components
15. **Build `Timer` component**: Digital display (MM:SS), Start/Pause button, Reset button. Use `useTimer` hook. Style with sage palette.
16. **Build `ProgressBar` component**: Horizontal bar with fill and "X of Y" label
17. **Build `ExerciseCard` component**: Card with exercise name, target, format, optional status badge
18. **Build `EncouragementBanner` component**: Slide-in banner with CSS animation, auto-hides after 1.5s

### Phase 5: Pages
19. **Build `HomePage`**: Two workout cards with "Up next" logic, optional streak counter. Wire up navigation to workout overview.
20. **Build `WorkoutOverviewPage`**: Read workout ID from URL params, look up workout data, render exercise list grouped by phase, "Let's Go" button dispatches `START_WORKOUT` and navigates.
21. **Build `ExercisePage`**: Core screen. Read workout ID and exercise index from URL params. Render GIF (with fallback), tips, benefit, format, timer, and action buttons. Handle Mark Complete (show encouragement, delay, navigate) and Skip (immediate navigate). Show phase transition banners when crossing phase boundaries.
22. **Build `CompletePage`**: Summary screen with stats, encouragement, persist to localStorage, "Back to Home" button.

### Phase 6: Routing & Integration
23. **Set up React Router in `App.tsx`**: Define all routes as listed in the Routing section
24. **Wrap app in `WorkoutProvider`** (from WorkoutContext)
25. **Test full flow**: Home -> Overview -> Exercise 1 -> ... -> Complete -> Home

### Phase 7: Polish
26. **Add GIF placeholder**: When a GIF file is not found, show a styled placeholder box with the exercise name and a dumbbell icon (SVG inline)
27. **Add phase transition banners**: Show brief messages when crossing warm-up/main/cool-down boundaries
28. **Add completion confetti**: CSS-only confetti animation on CompletePage (keyframe animation with colored dots)
29. **Responsive refinement**: Ensure the app looks good from 320px to 480px width, and is centered on wider screens
30. **Add `<meta>` viewport and PWA basics**: Set viewport meta tag in index.html, add a simple manifest.json for "Add to Home Screen" capability
31. **Accessibility pass**: Ensure all buttons have labels, timer is announced, color contrast passes WCAG AA

---

## Testing Strategy

Given this is a small client-side app with no backend, focus on:

### Manual Testing (Priority)
- Walk through both Workout A and Workout B completely
- Test Mark Complete and Skip for each exercise
- Test timer start/pause/reset
- Test navigation: forward, backward, home
- Test localStorage persistence: complete a workout, refresh, check that "Up next" suggestion updates
- Test with missing GIF files (placeholder should appear)
- Test on mobile Safari and Chrome (primary targets)

### Automated Tests (If Time Permits)
- **Unit tests for `useTimer` hook**: Verify elapsed counting, start/pause/reset behavior
- **Unit tests for `useWorkoutProgress`**: Verify localStorage read/write, completion recording
- **Unit tests for encouragement utility**: Verify it returns a string from the array
- **Component tests for ExercisePage**: Verify buttons dispatch correct actions
- Use Vitest (comes with Vite) and React Testing Library

---

## Edge Cases & Error Handling

| Scenario | Handling |
|----------|----------|
| GIF file missing | Show placeholder with exercise name and generic icon |
| User refreshes mid-workout | Session is lost (acceptable for v1 -- no mid-session persistence) |
| User navigates directly to `/workout/A/exercise/5` without starting | Redirect to `/workout/A/overview` |
| localStorage is full or unavailable | Catch errors, app works without persistence |
| Exercise index out of bounds in URL | Redirect to overview page |
| User completes 0 exercises (skips all) | Still show complete page, still count as a workout in history |
| Timer left running when navigating away | `useEffect` cleanup stops the interval |
| Very fast taps on Mark Complete | Debounce navigation -- disable button during encouragement delay |

---

## Open Questions

1. **Font loading**: Should we load Inter from Google Fonts, or rely on system fonts only? (System fonts = faster load, no external dependency. Recommend system fonts for v1.)
2. **Sound effects**: Any interest in a subtle chime on exercise complete? (Not in v1 unless requested.)
3. **Rest periods**: The current design has no explicit rest between sets within an exercise. The user self-manages. Should we add a "rest" screen between exercises? (Recommend no for v1 -- keep it simple, user controls pace.)
4. **Dark mode**: Not planned for v1. The warm-white palette is the single theme.
5. **GIF sizing**: What dimensions should the GIFs be? Recommend 480x320px, optimized for web (under 2MB each).

---

## Research Sources

- [Best Arm Toning Exercises for Women -- Vitality](https://shopvitality.com/blogs/vitality-fitness/best-arm-toning-exercises-for-women)
- [Toned Arms Workout for Women -- Nourish Move Love](https://www.nourishmovelove.com/toned-arms-exercises/)
- [Midlife Trainer Upper-Body Workout -- Fit&Well](https://www.fitandwell.com/exercise/strength-workouts/when-this-midlife-personal-trainer-is-asked-how-to-get-toned-arms-she-recommends-this-upper-body-workout)
- [Dumbbell Exercises for Arms -- Healthline](https://www.healthline.com/health/dumbbell-exercises-for-arms)
- [Strength Training for Women Over 40 -- PureGym](https://www.puregym.com/blog/strength-training-women-40/)
- [Resistance Training Injury Prevention -- Better Health Channel](https://www.betterhealth.vic.gov.au/health/healthyliving/resistance-training-preventing-injury)
- [Workout Tips for Women Over 40 -- Healthline](https://www.healthline.com/health/workout-tips-for-women-over-forty)
- [Exercise Beyond Menopause -- PMC/NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC3296386/)
- [Warm Up and Cool Down -- Mayo Clinic](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20045517)
- [Don't Skip Warm-Up or Cool-Down -- Harvard Health](https://www.health.harvard.edu/staying-healthy/exercise-101-dont-skip-the-warm-up-or-cool-down)
- [25-Minute Complete Body Workout -- Own Your Fitness](https://ownyourfitness.net/25-minute-complete-body-workout-for-toning/)
- [MadFit Workout Routine -- Athletes Routines](https://athletesroutines.com/routine/madfit-workout/)
- [MadFit Strength Training Guide -- Wellness Alibaba](https://wellness.alibaba.com/fitlife/madfit-strength-training-guide)
