export function PreLaunchLanding() {
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-[#006D77] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold">Gistify</div>
          <div className="flex space-x-6">
            <a href="#features" className="text-white hover:text-gray-200">Features</a>
            <a href="#pricing" className="text-white hover:text-gray-200">Pricing</a>
            <a href="#testimonials" className="text-white hover:text-gray-200">Testimonials</a>
            <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-[4rem] font-bold leading-tight mb-6">
            <span className="text-black">Reclaim Your Mornings.</span>{" "}
            <span className="text-[#FF595E] block md:inline">Stop Drowning in Newsletters</span>
          </h1>
          
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
            Our AI analyzes 30+ AI, Product, and Robotics Newsletters in your Inbox,
            Delivering You The Gist in Seconds!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button className="px-8 py-3 bg-[#006D77] text-white font-semibold rounded-md hover:bg-[#005a63] transition-colors">
              Sign Up
            </button>
            <button className="px-8 py-3 bg-white text-[#006D77] font-semibold rounded-md border-2 border-[#006D77] hover:bg-gray-50 transition-colors">
              Login
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 text-gray-500">
            <span>No credit card required</span>
            <span>•</span>
            <span>14-day free trial</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </section>
      </main>
    </div>
  );
} 