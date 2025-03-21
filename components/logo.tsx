import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="Gist Engine Logo" width={40} height={40} className="h-8 w-auto" priority />
    </div>
  )
}

