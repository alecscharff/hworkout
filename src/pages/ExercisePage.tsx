// src/pages/ExercisePage.tsx
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { workoutA } from '../data/workoutA'
import { workoutB } from '../data/workoutB'
import type { ExerciseFormat } from '../data/types'
import { useWorkout } from '../context/WorkoutContext'
import { Timer } from '../components/Timer'
import { ProgressBar } from '../components/ProgressBar'
import { EncouragementBanner } from '../components/EncouragementBanner'
import { getRandomEncouragement } from '../utils/encouragement'
import styles from './ExercisePage.module.css'

function getWorkout(id: string | undefined) {
  if (id === 'A') return workoutA
  if (id === 'B') return workoutB
  return null
}

function formatExercise(format: ExerciseFormat): string {
  if (format.type === 'reps') {
    const sideLabel = format.perSide ? ' per side' : ''
    return `${format.sets} sets of ${format.reps} reps${sideLabel}`
  } else {
    const sideLabel = format.perSide ? ' per side' : ''
    const secs = format.seconds
    const label = secs >= 60 ? `${Math.floor(secs / 60)} min` : `${secs} sec`
    return `Hold for ${label}, ${format.sets} set${format.sets > 1 ? 's' : ''}${sideLabel}`
  }
}

function getPhaseBannerMessage(
  prevPhase: string,
  nextPhase: string
): string | null {
  if (prevPhase === 'warmup' && nextPhase === 'main') {
    return 'Warm-up complete. Time to work!'
  }
  if (prevPhase === 'main' && nextPhase === 'cooldown') {
    return 'Main workout done. Let\'s stretch it out.'
  }
  return null
}

function GifImage({
  gifFilename,
  exerciseName,
}: {
  gifFilename: string
  exerciseName: string
}) {
  const [hasError, setHasError] = useState(false)
  const src = `/gifs/${gifFilename}`

  if (hasError) {
    return (
      <div className={styles.gifPlaceholder} aria-label={`Exercise: ${exerciseName}`}>
        <div className={styles.placeholderIcon} aria-hidden="true">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="4" y="20" width="8" height="8" rx="4" fill="#A8BFA0" />
            <rect x="36" y="20" width="8" height="8" rx="4" fill="#A8BFA0" />
            <rect x="8" y="18" width="4" height="12" rx="2" fill="#A8BFA0" />
            <rect x="36" y="18" width="4" height="12" rx="2" fill="#A8BFA0" />
            <rect x="12" y="22" width="24" height="4" rx="2" fill="#7A9470" />
          </svg>
        </div>
        <p className={styles.placeholderName}>{exerciseName}</p>
      </div>
    )
  }

  return (
    <img
      className={styles.gifImage}
      src={src}
      alt={exerciseName}
      onError={() => setHasError(true)}
    />
  )
}

export function ExercisePage() {
  const { id, index: indexParam } = useParams<{ id: string; index: string }>()
  const navigate = useNavigate()
  const { session, dispatch } = useWorkout()

  const [encouragementVisible, setEncouragementVisible] = useState(false)
  const [encouragementMsg, setEncouragementMsg] = useState('')
  const [completing, setCompleting] = useState(false)

  const workout = getWorkout(id)
  const exerciseIndex = parseInt(indexParam ?? '0', 10)

  // Guard: no session → redirect to overview
  useEffect(() => {
    if (!session || session.workoutId !== id) {
      navigate(`/workout/${id}/overview`, { replace: true })
    }
  }, [session, id, navigate])

  if (!workout || !session || session.workoutId !== id) {
    return null
  }

  // Guard: index out of bounds
  if (
    isNaN(exerciseIndex) ||
    exerciseIndex < 0 ||
    exerciseIndex >= workout.exercises.length
  ) {
    navigate(`/workout/${id}/overview`, { replace: true })
    return null
  }

  const exercise = workout.exercises[exerciseIndex]
  const totalExercises = workout.exercises.length
  const isLastExercise = exerciseIndex === totalExercises - 1

  // Phase transition banner: check if we crossed a phase boundary from previous exercise
  const prevExercise =
    exerciseIndex > 0 ? workout.exercises[exerciseIndex - 1] : null
  const phaseTransitionMsg =
    prevExercise && prevExercise.phase !== exercise.phase
      ? getPhaseBannerMessage(prevExercise.phase, exercise.phase)
      : null

  function phaseBadgeClass(phase: string): string {
    if (phase === 'warmup') return styles.phaseBadgeWarmup
    if (phase === 'main') return styles.phaseBadgeMain
    return styles.phaseBadgeCooldown
  }

  function phaseLabel(phase: string): string {
    if (phase === 'warmup') return 'Warm-Up'
    if (phase === 'main') return 'Main Workout'
    return 'Cool-Down'
  }

  function navigateNext() {
    if (isLastExercise) {
      navigate(`/workout/${id}/complete`)
    } else {
      navigate(`/workout/${id}/exercise/${exerciseIndex + 1}`)
    }
  }

  function handleComplete() {
    if (completing) return
    setCompleting(true)

    dispatch({ type: 'COMPLETE_EXERCISE', payload: { index: exerciseIndex } })

    const msg = getRandomEncouragement()
    setEncouragementMsg(msg)
    setEncouragementVisible(true)

    setTimeout(() => {
      setEncouragementVisible(false)
      setTimeout(() => {
        setCompleting(false)
        navigateNext()
      }, 300) // allow banner to slide out before navigating
    }, 1500)
  }

  function handleSkip() {
    dispatch({ type: 'SKIP_EXERCISE', payload: { index: exerciseIndex } })
    navigateNext()
  }

  function handleBack() {
    if (exerciseIndex > 0) {
      navigate(`/workout/${id}/exercise/${exerciseIndex - 1}`)
    } else {
      navigate(`/workout/${id}/overview`)
    }
  }

  return (
    <>
      <EncouragementBanner visible={encouragementVisible} message={encouragementMsg} />

      <main className={styles.page}>
        <div className={styles.topBar}>
          <button
            className={styles.backBtn}
            onClick={handleBack}
            aria-label="Go to previous exercise"
          >
            ←
          </button>
          <div className={styles.progressWrapper}>
            <ProgressBar current={exerciseIndex + 1} total={totalExercises} />
          </div>
        </div>

        {phaseTransitionMsg && (
          <div className={styles.phaseBanner} role="status" aria-live="polite">
            {phaseTransitionMsg}
          </div>
        )}

        <div className={styles.content}>
          <div>
            <span className={`${styles.phaseBadge} ${phaseBadgeClass(exercise.phase)}`}>
              {phaseLabel(exercise.phase)}
            </span>
          </div>

          <h1 className={styles.exerciseName}>{exercise.name}</h1>

          <div className={styles.gifArea}>
            <GifImage
              gifFilename={exercise.gifFilename}
              exerciseName={exercise.name}
            />
          </div>

          <div className={styles.benefitSection}>
            <span className={styles.targetLabel}>Targets</span>
            <span className={styles.targetMuscles}>{exercise.targetMuscles}</span>
            <p className={styles.benefitText}>{exercise.benefit}</p>
          </div>

          <div className={styles.formatSection}>
            <span className={styles.formatIcon} aria-hidden="true">
              {exercise.format.type === 'reps' ? '🔄' : '⏱'}
            </span>
            <div className={styles.formatDetails}>
              <span className={styles.formatLabel}>Format</span>
              <span className={styles.formatText}>
                {formatExercise(exercise.format)}
              </span>
              {exercise.equipment && (
                <span className={styles.equipmentText}>
                  Equipment: {exercise.equipment}
                </span>
              )}
            </div>
          </div>

          <div className={styles.tipsSection}>
            <h2 className={styles.tipsSectionTitle}>Form Tips</h2>
            <ol className={styles.tipsList}>
              {exercise.tips.map((tip, i) => (
                <li key={i} className={styles.tipItem}>
                  <span className={styles.tipNumber} aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className={styles.tipText}>{tip}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.timerSection}>
            <span className={styles.timerLabel}>Timer</span>
            <Timer key={`timer-${exerciseIndex}`} />
          </div>
        </div>

        <div className={styles.stickyActions}>
          <button
            className={styles.btnComplete}
            onClick={handleComplete}
            disabled={completing}
            aria-label={isLastExercise ? 'Mark complete and finish workout' : 'Mark complete and go to next exercise'}
          >
            {isLastExercise ? 'Finish Workout' : 'Mark Complete'}
          </button>
          <button
            className={styles.btnSkip}
            onClick={handleSkip}
            disabled={completing}
            aria-label={isLastExercise ? 'Skip and finish workout' : 'Skip this exercise'}
          >
            Skip
          </button>
        </div>
      </main>
    </>
  )
}
