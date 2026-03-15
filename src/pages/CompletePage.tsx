// src/pages/CompletePage.tsx
import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { workoutA } from '../data/workoutA'
import { workoutB } from '../data/workoutB'
import { useWorkout } from '../context/WorkoutContext'
import { useWorkoutProgress } from '../hooks/useWorkoutProgress'
import { getRandomCompletion } from '../utils/encouragement'
import styles from './CompletePage.module.css'

function getWorkout(id: string | undefined) {
  if (id === 'A') return workoutA
  if (id === 'B') return workoutB
  return null
}

function formatDuration(startedAt: string): string {
  const startMs = new Date(startedAt).getTime()
  const nowMs = Date.now()
  const totalSeconds = Math.max(0, Math.floor((nowMs - startMs) / 1000))
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  if (mins === 0) return `${secs}s`
  if (secs === 0) return `${mins}m`
  return `${mins}m ${secs}s`
}

// Generate confetti pieces array (20 total)
const CONFETTI_COUNT = 20

export function CompletePage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { session, dispatch } = useWorkout()
  const { recordCompletion } = useWorkoutProgress()
  const closingMsg = useRef(getRandomCompletion())
  const persistedRef = useRef(false)

  const workout = getWorkout(id)

  // Persist completion on mount (once)
  useEffect(() => {
    if (session && workout && !persistedRef.current) {
      persistedRef.current = true
      recordCompletion(session, workout.exercises.length)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function handleHome() {
    dispatch({ type: 'RESET_SESSION' })
    navigate('/')
  }

  if (!workout) {
    navigate('/')
    return null
  }

  const statuses = session?.statuses ?? []
  const completed = statuses.filter((s) => s === 'complete').length
  const skipped = statuses.filter((s) => s === 'skipped').length
  const totalExercises = workout.exercises.length
  const duration = session ? formatDuration(session.startedAt) : '--'

  return (
    <main className={styles.page}>
      {/* CSS-only confetti */}
      <div className={styles.confettiContainer} aria-hidden="true">
        {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
          <div key={i} className={styles.confettiPiece} />
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.celebration}>
          <div className={styles.celebrationIcon} aria-hidden="true">🌿</div>
          <h1 className={styles.heading}>Workout Complete!</h1>
          <p className={styles.workoutLabel}>{workout.name}</p>
        </div>

        <div className={styles.statsCard}>
          <h2 className={styles.statsTitle}>Your Session</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={`${styles.statValue} ${styles.statValueGreen}`}>
                {completed}
              </span>
              <span className={styles.statLabel}>Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{skipped}</span>
              <span className={styles.statLabel}>Skipped</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{duration}</span>
              <span className={styles.statLabel}>Total Time</span>
            </div>
          </div>
          {totalExercises > 0 && (
            <p
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-light)',
                textAlign: 'center',
              }}
            >
              {completed} of {totalExercises} exercises done
            </p>
          )}
        </div>

        <p className={styles.closing}>&ldquo;{closingMsg.current}&rdquo;</p>

        <button
          className={styles.homeBtn}
          onClick={handleHome}
          aria-label="Back to home"
        >
          Back to Home
        </button>
      </div>
    </main>
  )
}
