import { Shield, Plus } from "lucide-react"

interface DashboardMockupProps {
  url: string
  imageSrc: string
  imageAlt: string
}

export function DashboardMockup({ url, imageSrc, imageAlt }: DashboardMockupProps) {
  return (
    <div className="lg:flex-[1.5] w-full max-w-3xl transform perspective-1000 rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 transform hover:scale-[1.02] transition-all duration-500 group">
        {/* Browser Chrome */}
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-2 rounded-t-lg border-b border-slate-200">
          <div className="h-2"></div>
          <div className="flex items-center">
            <div className="flex items-center space-x-1.5 mr-3">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1.5 text-sm text-slate-500 flex items-center group-hover:border-blue-200 transition-colors">
              <Shield className="w-4 h-4 mr-2 text-blue-500" />
              <span className="flex-1">{url}</span>
              <Plus className="w-4 h-4 ml-2 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Dashboard Image */}
        <div className="w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* Browser Status Bar */}
        <div className="bg-slate-50 border-t border-slate-200 py-1 px-3 text-xs text-slate-500 flex justify-between items-center">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
            Secure connection
          </div>
          <div>© 2025 Gistify</div>
        </div>
      </div>

      {/* Shadow Effect */}
      <div className="h-4 bg-gradient-to-b from-black/10 to-transparent rounded-b-xl mx-5 blur-sm"></div>
    </div>
  )
}

