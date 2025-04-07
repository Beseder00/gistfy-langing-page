import React from "react"
import { LucideProps } from "lucide-react"

export const Robot = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <circle cx="9" cy="13" r="1.5" fill="currentColor" />
      <circle cx="15" cy="13" r="1.5" fill="currentColor" />
      <path d="M9 18l3 1.5 3-1.5" />
    </svg>
  )
}

export const VibeComputer = (props: LucideProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Laptop base with stylish curve */}
      <path d="M2 20c0-1 2-2 4-2h12c2 0 4 1 4 2" />
      {/* Laptop screen - slightly curved for modern look */}
      <rect x="5" y="6" width="14" height="10" rx="1.5" />
      {/* Keyboard area - subtle design */}
      <path d="M7 16h10" />
      {/* Vibe waves emanating from screen - animation feel */}
      <path d="M9 3.5c2 2 4 2 6 0" strokeDasharray="2" />
      <path d="M7.5 1.5c3 3 6 3 9 0" strokeDasharray="3" />
      {/* Code symbols on screen - simplified coding */}
      <path d="M8 9l2 2" />
      <path d="M12 11l2-2" />
      <path d="M9 13h6" />
      {/* Small matrix-like dot grid to indicate coding interface */}
      <circle cx="7.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="9.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="7.5" cy="10" r="0.6" fill="currentColor" />
      <circle cx="16.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="16.5" cy="10" r="0.6" fill="currentColor" />
    </svg>
  )
} 