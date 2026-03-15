// src/pages/WorkoutOverviewPage.tsx
import { useParams, useNavigate } from 'react-router-dom'
import { workoutA } from '../data/workoutA'
import { workoutB } from '../data/workoutB'
import type { Exercise } from '../data/types'
import { useWorkout } from '../context/WorkoutContext'
import { ExerciseCard } from '../components/ExerciseCard'
import styles from './WorkoutOverviewPage.module.css'

function getWorkout(id: string | undefined) {
  if (id === 'A') return workoutA
  if (id === 'B') return workoutB
  return null
}

export function WorkoutOverviewPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { dispatch } = useWorkout()

  const workout = getWorkout(id)

  if (!workout) {
    navigate('/')
    return null
  }

  const warmupExercises = workout.exercises.filter((e) => e.phase === 'warmup')
  const mainExercises = workout.exercises.filter((e) => e.phase === 'main')
  const cooldownExercises = workout.exercises.filter((e) => e.phase === 'cooldown')

  function handleLetsGo() {
    dispatch({
      type: 'START_WORKOUT',
      payload: {
        workoutId: workout!.id,
        totalExercises: workout!.exercises.length,
      },
    })
    navigate(`/workout/${id}/exercise/0`)
  }

  function renderSection(
    title: string,
    titleClass: string,
    exercises: Exercise[],
    startIndex: number
  ) {
    return (
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${titleClass}`}>{title}</h2>
          <span className={styles.sectionCount}>{exercises.length} exercises</span>
        </div>
        <div className={styles.exerciseList}>
          {exercises.map((ex, i) => (
            <ExerciseCard key={ex.id} exercise={ex} index={startIndex + i} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button
          className={styles.backBtn}
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          ← Back
        </button>
      </div>

      <header className={styles.header}>
        <h1 className={styles.workoutName}>{workout.name}</h1>
        <p className={styles.workoutSubtitle}>{workout.subtitle}</p>
        <div className={styles.workoutMeta}>
          <span className={styles.metaItem}>
            {workout.exercises.length} exercises
          </span>
          <span className={styles.metaItem}>~{workout.estimatedMinutes} min</span>
        </div>
      </header>

      <div className={styles.content}>
        {renderSection(
          'Warm-Up',
          styles.sectionTitleWarmup,
          warmupExercises,
          0
        )}
        {renderSection(
          'Main Workout',
          styles.sectionTitleMain,
          mainExercises,
          warmupExercises.length
        )}
        {renderSection(
          'Cool-Down',
          styles.sectionTitleCooldown,
          cooldownExercises,
          warmupExercises.length + mainExercises.length
        )}
      </div>

      <div className={styles.stickyFooter}>
        <button
          className={styles.letsGoBtn}
          onClick={handleLetsGo}
          aria-label={`Start ${workout.name}`}
        >
          Let's Go
        </button>
      </div>
    </div>
  )
}
