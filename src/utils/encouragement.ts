// src/utils/encouragement.ts

export const encouragementMessages: string[] = [
  "Nice work! You're building real strength.",
  "That's the way. Every rep counts.",
  "Strong and steady. Keep it up!",
  "You showed up, and that's what matters.",
  "Feeling good? You should -- that was great.",
  "One more in the books. You've got this.",
  "Your muscles are thanking you right now.",
  "Consistency is your superpower.",
  "Look at you go. Solid effort!",
  "That's progress you can feel.",
  "You're doing something great for yourself.",
  "Strength looks good on you.",
]

export function getRandomEncouragement(): string {
  return encouragementMessages[
    Math.floor(Math.random() * encouragementMessages.length)
  ]
}

export const completionMessages: string[] = [
  "You did it. Another workout in the books.",
  "Every session is an investment in future you.",
  "Your consistency is what makes the difference.",
  "Strong body, clear mind. You earned this.",
  "That wasn't easy -- which is exactly why it mattered.",
]

export function getRandomCompletion(): string {
  return completionMessages[
    Math.floor(Math.random() * completionMessages.length)
  ]
}
