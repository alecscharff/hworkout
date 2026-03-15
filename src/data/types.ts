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
