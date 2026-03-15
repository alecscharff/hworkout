// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { WorkoutProvider } from './context/WorkoutContext'
import { HomePage } from './pages/HomePage'
import { WorkoutOverviewPage } from './pages/WorkoutOverviewPage'
import { ExercisePage } from './pages/ExercisePage'
import { CompletePage } from './pages/CompletePage'

function App() {
  return (
    <BrowserRouter>
      <WorkoutProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout/:id/overview" element={<WorkoutOverviewPage />} />
          <Route path="/workout/:id/exercise/:index" element={<ExercisePage />} />
          <Route path="/workout/:id/complete" element={<CompletePage />} />
          {/* Fallback: redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </WorkoutProvider>
    </BrowserRouter>
  )
}

export default App
