import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Gist Engine Logo"
      width={40}
      height={40}
      className="h-8 w-auto"
      priority
    />
  );
}
