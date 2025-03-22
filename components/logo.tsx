import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/gistify-logo.png"
        alt="Gistify Logo"
        width={180}
        height={48}
        className="h-8 w-auto sm:h-12"
        priority
      />
    </div>
  )
} 