// src/hooks/useWorkoutProgress.ts
import type { PersistedProgress, WorkoutSession } from '../data/types'

const STORAGE_KEY = 'hworkout-progress'

const defaultProgress: PersistedProgress = {
  lastCompletedWorkout: null,
  lastCompletedDate: null,
  totalWorkoutsCompleted: 0,
  history: [],
}

export function useWorkoutProgress() {
  function getProgress(): PersistedProgress {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return defaultProgress
      return JSON.parse(raw) as PersistedProgress
    } catch {
      return defaultProgress
    }
  }

  function recordCompletion(
    session: WorkoutSession,
    totalExercises: number
  ): void {
    try {
      const current = getProgress()
      const exercisesCompleted = session.statuses.filter(
        (s) => s === 'complete'
      ).length
      const exercisesSkipped = session.statuses.filter(
        (s) => s === 'skipped'
      ).length
      const date = new Date().toISOString()

      const updated: PersistedProgress = {
        lastCompletedWorkout: session.workoutId,
        lastCompletedDate: date,
        totalWorkoutsCompleted: current.totalWorkoutsCompleted + 1,
        history: [
          {
            workoutId: session.workoutId,
            date,
            exercisesCompleted,
            exercisesSkipped,
            totalExercises,
          },
          ...current.history,
        ],
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // localStorage unavailable — app works without persistence
    }
  }

  function getLastWorkout(): 'A' | 'B' | null {
    return getProgress().lastCompletedWorkout
  }

  return { getProgress, recordCompletion, getLastWorkout }
}
