// src/components/ExerciseCard.tsx
import type { Exercise, ExerciseStatus, ExerciseFormat } from '../data/types'
import styles from './ExerciseCard.module.css'

interface ExerciseCardProps {
  exercise: Exercise
  index: number
  status?: ExerciseStatus
}

function formatSummary(format: ExerciseFormat): string {
  if (format.type === 'reps') {
    const sideLabel = format.perSide ? '/side' : ''
    return `${format.sets}x${format.reps}${sideLabel}`
  } else {
    const sideLabel = format.perSide ? '/side' : ''
    return `${format.sets}x${format.seconds}s${sideLabel}`
  }
}

export function ExerciseCard({ exercise, index, status }: ExerciseCardProps) {
  const cardClass = [
    styles.card,
    status === 'complete' ? styles.cardComplete : '',
    status === 'skipped' ? styles.cardSkipped : '',
  ]
    .filter(Boolean)
    .join(' ')

  const badgeClass = [
    styles.indexBadge,
    status === 'complete' ? styles.indexBadgeComplete : '',
    status === 'skipped' ? styles.indexBadgeSkipped : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cardClass}>
      <div className={badgeClass}>
        {status === 'complete' ? (
          <span aria-label="Complete">✓</span>
        ) : status === 'skipped' ? (
          <span aria-label="Skipped">–</span>
        ) : (
          <span>{index + 1}</span>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{exercise.name}</div>
        <div className={styles.meta}>
          <span className={styles.target}>{exercise.targetMuscles}</span>
          <span className={styles.format}>{formatSummary(exercise.format)}</span>
        </div>
      </div>
      {status === 'complete' && (
        <div className={styles.statusIcon} aria-hidden="true">✅</div>
      )}
      {status === 'skipped' && (
        <div className={styles.statusIcon} aria-hidden="true">⏭</div>
      )}
    </div>
  )
}
