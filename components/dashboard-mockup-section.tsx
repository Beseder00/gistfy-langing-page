import Image from "next/image"

export function DashboardMockupSection() {
  return (
    <section className="py-20 px-4 bg-[#F0F4F8]" id="command-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Meet Your New Content Command Center</h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            Gistify's intuitive dashboard puts powerful AI tools at your fingertips
          </p>
        </div>

        {/* Browser Mockup - Improved container */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 max-w-5xl mx-auto">
          {/* Browser Chrome */}
          <div className="bg-[#F1F5F9] p-2 rounded-t-lg border-b border-slate-200 flex items-center">
            <div className="flex items-center space-x-1.5 mr-4">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-sm text-slate-500 flex items-center justify-center">
              app.gistify.ai/dashboard
            </div>
          </div>

          {/* Dashboard Image - Improved fit */}
          <div className="w-full">
            <Image
              src="/dashboard-mockup.png"
              alt="Gistify AI Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

