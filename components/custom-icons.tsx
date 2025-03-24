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