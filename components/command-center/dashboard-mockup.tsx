import Image from "next/image"

interface DashboardMockupProps {
  url: string
  imageSrc: string
  imageAlt: string
}

export function DashboardMockup({ url, imageSrc, imageAlt }: DashboardMockupProps) {
  return (
    <div className="w-full group perspective-1000">
      {/* Browser Window Mockup with improved shadows and subtle hover animation */}
      <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out transform group-hover:shadow-[0_15px_60px_rgba(0,0,0,0.12)] group-hover:-translate-y-1">
        {/* Browser Header with more realistic controls */}
        <div className="flex items-center gap-1.5 px-4 py-3 bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]" />
          </div>
          <div className="flex-1 mx-4">
            <div className="w-full max-w-sm mx-auto bg-white rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 flex items-center justify-center shadow-sm">
              <div className="flex items-center w-full">
                <span className="text-green-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                {url}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#94a3b8" className="w-4 h-4">
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#94a3b8" className="w-4 h-4">
                <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#94a3b8" className="w-4 h-4">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Browser Content with subtle animation but no fuzzy overlay */}
        <div className="w-full relative overflow-hidden">
          {/* Subtle border glow effect instead of overlay */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/10 rounded-b-xl z-10 pointer-events-none transition-all duration-300"></div>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="w-full h-auto transition-transform duration-700 ease-out transform group-hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </div>
  )
}

