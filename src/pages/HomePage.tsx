// src/pages/HomePage.tsx
import { useNavigate } from 'react-router-dom'
import { workoutA } from '../data/workoutA'
import { workoutB } from '../data/workoutB'
import { useWorkoutProgress } from '../hooks/useWorkoutProgress'
import styles from './HomePage.module.css'

const workouts = [workoutA, workoutB]

export function HomePage() {
  const navigate = useNavigate()
  const { getProgress } = useWorkoutProgress()
  const progress = getProgress()

  // Suggest the opposite of what was last done; default to A
  const suggestedId: 'A' | 'B' =
    progress.lastCompletedWorkout === 'A'
      ? 'B'
      : progress.lastCompletedWorkout === 'B'
      ? 'A'
      : 'A'

  function handlePickWorkout(id: 'A' | 'B') {
    navigate(`/workout/${id}/overview`)
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>hworkout</h1>
        <p className={styles.subtitle}>Your toning routine</p>
        {progress.totalWorkoutsCompleted > 0 && (
          <span className={styles.streak}>
            {progress.totalWorkoutsCompleted === 1
              ? 'You have completed 1 workout'
              : `You have completed ${progress.totalWorkoutsCompleted} workouts`}
          </span>
        )}
      </header>

      <p className={styles.sectionLabel}>Choose your workout</p>

      <div className={styles.workoutCards}>
        {workouts.map((workout) => {
          const isSuggested = workout.id === suggestedId
          return (
            <button
              key={workout.id}
              className={`${styles.workoutCard} ${isSuggested ? styles.workoutCardSuggested : ''}`}
              onClick={() => handlePickWorkout(workout.id)}
              aria-label={`Start ${workout.name}${isSuggested ? ', suggested' : ''}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.workoutName}>{workout.name}</span>
                {isSuggested && (
                  <span className={styles.upNextBadge}>Up next</span>
                )}
              </div>
              <p className={styles.workoutSubtitle}>{workout.subtitle}</p>
              <div className={styles.workoutMeta}>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon} aria-hidden="true">🏋️</span>
                  {workout.exercises.length} exercises
                </span>
                <span className={styles.metaItem}>
                  <span className={styles.metaIcon} aria-hidden="true">⏱</span>
                  ~{workout.estimatedMinutes} min
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </main>
  )
}
