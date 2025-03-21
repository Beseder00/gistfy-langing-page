"use client"

import type React from "react"
import { X, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface EmailPopupProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
  email: string
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  title: string
  badge: string
  buttonText: string
  placeholder: string
  benefits: string[]
}

export function EmailPopup({
  isOpen,
  onClose,
  onSubmit,
  email,
  onEmailChange,
  title,
  badge,
  buttonText,
  placeholder,
  benefits,
}: EmailPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full relative animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center justify-center mb-3">
          <span className="inline-flex items-center text-[#3B82F6] text-sm font-medium">
            <span className="mr-1">🎁</span> {badge}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#1E3A8A] text-center mb-5">{title}</h3>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder={placeholder}
              className="pl-10 h-12 border-gray-300 rounded-lg w-full"
              value={email}
              onChange={onEmailChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 rounded-lg font-medium text-base h-12"
          >
            {buttonText}
          </Button>

          <div className="flex justify-center gap-x-6 text-xs text-gray-500 mt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-[#3B82F6]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

