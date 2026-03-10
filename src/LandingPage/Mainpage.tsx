import React from "react";
import HEROIMAGE from "../assets/img/founder-page.png";

const OxyGlobalHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] px-5 py-12 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Background blur effects */}
      <div className="absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-cyan-100/50 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute right-[-40px] top-10 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="order-1 text-center lg:order-1 lg:text-left">
          <p className="mb-4 inline-block rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold tracking-wide text-[#2563eb] shadow-sm sm:text-sm">
            FUTURE READY SOFTWARE TECHNOLOGY
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-[#1e3a8a] sm:text-4xl md:text-5xl xl:text-[60px] lg:mx-0">
            Build Powerful Digital Platforms for{" "}
            <span className="text-[#2563eb]">Marketplace</span>,{" "}
            <span className="text-[#22c55e]">Fractional Ownership</span> &{" "}
            <span className="text-[#1e40af]">Fundraising</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#475569] sm:text-base md:text-lg lg:mx-0">
            <span className="font-bold text-[#16a34a]">OXYGLOBAL.TECH</span> is
            a forward-thinking software technology company delivering modern,
            scalable, and secure platforms using the latest innovations for real
            business growth.
          </p>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#22c55e] lg:mx-0" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#334155] sm:text-base md:text-lg lg:mx-0">
            We integrate{" "}
            <span className="font-bold text-[#1e3a8a]">Blockchain</span> to
            create a single source of truth, ensuring transparency, trust, and
            operational efficiency across digital ecosystems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-[#1d4ed8]">
              Get Started
            </button>
            <button className="rounded-full border border-[#cbd5e1] bg-white px-6 py-3 text-sm font-semibold text-[#1e293b] transition duration-300 hover:border-[#2563eb] hover:text-[#2563eb]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] xl:max-w-[560px]">
            {/* Outer card */}
            <div className="rounded-[28px] bg-white/70 p-3 shadow-[0_20px_60px_rgba(37,99,235,0.12)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[24px] bg-gradient-to-br from-[#eff6ff] via-white to-[#e0f2fe] p-3">
                <img
                  src={HEROIMAGE}
                  alt="Founder"
                  className="w-full rounded-[20px] object-contain"
                />
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute -left-6 top-10 hidden rounded-2xl bg-white px-4 py-3 shadow-xl md:block">
              <p className="text-xs font-medium text-slate-500">Trusted Tech</p>
              <p className="text-sm font-bold text-[#1e3a8a]">
                Modern Platforms
              </p>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -bottom-5 right-0 hidden rounded-2xl bg-white px-4 py-3 shadow-xl md:block">
              <p className="text-xs font-medium text-slate-500">Powered by</p>
              <p className="text-sm font-bold text-[#16a34a]">Blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OxyGlobalHero;