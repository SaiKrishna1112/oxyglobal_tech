import React from "react";
import HEROIMAGE from "../assets/img/founder-page.png";

// your decorative elements
import BG_SHAPE_1 from "../assets/img/bg-shape-1.png";
import BG_SHAPE_2 from "../assets/img/bg-shape-2.png";
import BG_SHAPE_3 from "../assets/img/bg-shape-3.png";
import BG_SHAPE_4 from "../assets/img/bg-shape-4.png";

const OxyGlobalHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-12 sm:pt-24 sm:pb-14 md:px-10 md:pt-28 md:pb-16 lg:px-16 lg:pt-32 lg:pb-20 xl:px-20">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes floatX {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(8px); }
        }

        @keyframes softRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-floatY {
          animation: floatY 5s ease-in-out infinite;
        }

        .animate-floatX {
          animation: floatX 7s ease-in-out infinite;
        }

        .animate-softRotate {
          animation: softRotate 20s linear infinite;
        }

        .word-underline {
          position: relative;
          display: inline-block;
          padding-bottom: 6px;
          white-space: nowrap;
        }

        .word-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          border-radius: 999px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          opacity: 0;
          animation: underlineMove 10s infinite;
        }

        @keyframes underlineMove {
          0%, 20%, 100% {
            transform: scaleX(0);
            opacity: 0;
          }
          4% {
            transform: scaleX(0);
            opacity: 1;
          }
          10%, 16% {
            transform: scaleX(1);
            opacity: 1;
          }
          20% {
            transform: scaleX(0);
            opacity: 0;
          }
        }

        .word-people::after {
          animation-delay: 0s;
        }

        .word-platforms::after {
          animation-delay: 2.5s;
        }

        .word-products::after {
          animation-delay: 5s;
        }

        .word-capital::after {
          animation-delay: 7.5s;
        }
      `}</style>

      <img
        src={BG_SHAPE_1}
        alt=""
        className="pointer-events-none absolute left-14 top-20 hidden w-16 opacity-20 sm:block md:w-24 lg:w-30"
      />

      <img
        src={BG_SHAPE_2}
        alt=""
        className="pointer-events-none absolute right-[0%] bottom-4 hidden w-full opacity-20 md:block lg:w-60"
      />

      <img
        src={BG_SHAPE_3}
        alt=""
        className="pointer-events-none absolute left-[0%] bottom-14 hidden w-36 opacity-35 lg:block"
      />

      <img
        src={BG_SHAPE_4}
        alt=""
        className="pointer-events-none absolute right-[45%] top-[22%] hidden w-36 opacity-15 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {/* LEFT CONTENT - now first on mobile */}
        <div className="order-1 text-center lg:order-1 lg:text-left">
          <p className="mb-4 inline-block rounded-full border border-[#2F5FAA]/20 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#2F5FAA] shadow-sm sm:text-xs">
            FUTURE READY SOFTWARE TECHNOLOGY
          </p>

          <h1 className="mx-auto max-w-2xl text-[28px] font-bold leading-[1.2] sm:text-[34px] md:text-[40px] lg:mx-0 lg:text-[42px] xl:text-[48px]">
            <span className="text-[#3A3A3A]">
              Build Powerful Digital Platforms for
            </span>
            <br className="hidden sm:block" />
            <span className="text-[#36A35C] word-underline word-people">
              People
            </span>
            <span className="text-[#2F5FAA]"> | </span>
            <span className="text-[#2F5FAA] word-underline word-platforms">
              Platforms
            </span>
            <span className="text-[#2F5FAA]"> | </span>
            <span className="text-[#36A35C] word-underline word-products">
              Products
            </span>
            <span className="text-[#2F5FAA]"> | </span>
            <span className="text-[#2F5FAA] word-underline word-capital">
              Capital
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#3A3A3A] sm:text-base md:text-lg lg:mx-0 lg:max-w-xl">
            <span className="font-semibold text-[#36A35C]">OXYGLOBAL.TECH</span>{" "}
            is a forward-thinking software technology company building modern,
            scalable digital ecosystems connecting people, platforms, products,
            and capital for global innovation.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#3A3A3A] sm:text-base md:text-lg lg:mx-0 lg:max-w-xl">
            Our platforms integrate advanced technologies including{" "}
            <span className="font-semibold text-[#2F5FAA]">Blockchain</span>,
            ensuring transparency, trust, and efficiency across digital
            ecosystems.
          </p>
        </div>

        {/* RIGHT IMAGE - now second on mobile */}
        <div className="order-2 flex items-center justify-center lg:order-2 lg:justify-center">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[430px] xl:max-w-[470px]">
              <img
                src={HEROIMAGE}
                alt="Founder"
                className="mx-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OxyGlobalHero;