import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo-icon.svg"
        alt="Gistify Logo"
        width={32}
        height={32}
        className="h-8 w-auto sm:h-10"
      />
      <Image
        src="/logo.svg"
        alt="Gistify"
        width={100}
        height={32}
        className="hidden h-8 w-auto sm:block dark:invert"
      />
    </div>
  )
} 