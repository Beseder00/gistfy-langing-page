import Image from "next/image"

interface DashboardMockupProps {
  url: string
  imageSrc: string
  imageAlt: string
}

export function DashboardMockup({ url, imageSrc, imageAlt }: DashboardMockupProps) {
  return (
    <div className="w-full">
      {/* Browser Window Mockup */}
      <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
        {/* Browser Header */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex-1 mx-4">
            <div className="w-full max-w-sm mx-auto bg-white rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600">
              {url}
            </div>
          </div>
        </div>

        {/* Browser Content */}
        <div className="w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}

