// src/components/Timer.tsx
import { useTimer } from '../hooks/useTimer'
import styles from './Timer.module.css'

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export function Timer() {
  const { elapsedSeconds, isRunning, start, pause, reset } = useTimer()

  return (
    <div className={styles.timer}>
      <div className={styles.display} aria-live="off" aria-label={`Timer: ${formatTime(elapsedSeconds)}`}>
        {formatTime(elapsedSeconds)}
      </div>
      <div className={styles.controls}>
        <button
          className={styles.btnStartPause}
          onClick={isRunning ? pause : start}
          aria-label={isRunning ? 'Pause timer' : 'Start timer'}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className={styles.btnReset}
          onClick={reset}
          aria-label="Reset timer"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
