// src/context/WorkoutContext.tsx
import { createContext, useContext, useReducer, type ReactNode } from 'react'
import type { WorkoutSession, ExerciseStatus } from '../data/types'

// --- Action types ---

type WorkoutAction =
  | { type: 'START_WORKOUT'; payload: { workoutId: 'A' | 'B'; totalExercises: number } }
  | { type: 'COMPLETE_EXERCISE'; payload: { index: number } }
  | { type: 'SKIP_EXERCISE'; payload: { index: number } }
  | { type: 'GO_TO_EXERCISE'; payload: { index: number } }
  | { type: 'RESET_SESSION' }

// --- State ---

interface WorkoutContextState {
  session: WorkoutSession | null
}

const initialState: WorkoutContextState = {
  session: null,
}

// --- Reducer ---

function workoutReducer(
  state: WorkoutContextState,
  action: WorkoutAction
): WorkoutContextState {
  switch (action.type) {
    case 'START_WORKOUT': {
      const { workoutId, totalExercises } = action.payload
      const statuses: ExerciseStatus[] = Array(totalExercises).fill('pending')
      return {
        session: {
          workoutId,
          currentExerciseIndex: 0,
          statuses,
          startedAt: new Date().toISOString(),
        },
      }
    }

    case 'COMPLETE_EXERCISE': {
      if (!state.session) return state
      const newStatuses = [...state.session.statuses]
      newStatuses[action.payload.index] = 'complete'
      return {
        session: {
          ...state.session,
          statuses: newStatuses,
          currentExerciseIndex: action.payload.index,
        },
      }
    }

    case 'SKIP_EXERCISE': {
      if (!state.session) return state
      const newStatuses = [...state.session.statuses]
      newStatuses[action.payload.index] = 'skipped'
      return {
        session: {
          ...state.session,
          statuses: newStatuses,
          currentExerciseIndex: action.payload.index,
        },
      }
    }

    case 'GO_TO_EXERCISE': {
      if (!state.session) return state
      return {
        session: {
          ...state.session,
          currentExerciseIndex: action.payload.index,
        },
      }
    }

    case 'RESET_SESSION': {
      return { session: null }
    }

    default:
      return state
  }
}

// --- Context ---

interface WorkoutContextValue {
  session: WorkoutSession | null
  dispatch: React.Dispatch<WorkoutAction>
}

const WorkoutContext = createContext<WorkoutContextValue | null>(null)

// --- Provider ---

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(workoutReducer, initialState)

  return (
    <WorkoutContext.Provider value={{ session: state.session, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
}

// --- Hook ---

export function useWorkout(): WorkoutContextValue {
  const ctx = useContext(WorkoutContext)
  if (!ctx) {
    throw new Error('useWorkout must be used within a WorkoutProvider')
  }
  return ctx
}
