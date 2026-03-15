// src/components/EncouragementBanner.tsx
import styles from './EncouragementBanner.module.css'

interface EncouragementBannerProps {
  visible: boolean
  message: string
}

export function EncouragementBanner({ visible, message }: EncouragementBannerProps) {
  return (
    <div
      className={`${styles.banner} ${visible ? styles.bannerVisible : ''}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {message}
    </div>
  )
}
