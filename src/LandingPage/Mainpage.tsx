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
        <div className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mt-5 max-w-[95%] text-[14px] leading-6 text-[#3A3A3A] sm:max-w-2xl sm:text-[15px] sm:leading-7 md:text-[16px] lg:max-w-xl lg:text-[17px] xl:text-[18px]">
            <span className="font-semibold text-[#111827]">
              OXYGLOBAL TECHNOLOGIES{" "}
            </span>{" "}
            is a global software technology company building modern, scalable
            digital ecosystems that connect people, platforms, products, and
            capital for global innovation.
          </p>

          <p className="mt-4 max-w-[95%] text-[14px] leading-6 text-[#3A3A3A] sm:max-w-2xl sm:text-[15px] sm:leading-7 md:text-[16px] lg:max-w-xl lg:text-[17px] xl:text-[18px]">
            Our platforms integrate advanced technologies including{" "}
            <span className="font-semibold text-[#2F5FAA]">Blockchain</span>,
            enabling transparency, trust, and efficiency across connected
            digital ecosystems.
          </p>

          <h1 className="mt-7 max-w-[95%] text-[26px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:max-w-3xl sm:text-[34px] md:text-[42px] lg:mt-9 lg:max-w-4xl lg:text-[50px] xl:text-[58px]">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:justify-start">
              <span className="text-[#2F5FAA] word-underline word-people">
                People
              </span>
              <span className="px-1 text-[#C4CAD4] sm:px-2">|</span>
              <span className="text-[#36A35C] word-underline word-platforms">
                Platforms
              </span>
              <span className="px-1 text-[#C4CAD4] sm:px-2">|</span>
              <span className="text-[#6B7280] word-underline word-products">
                Products
              </span>
              <span className="px-1 text-[#C4CAD4] sm:px-2">|</span>
              <span className="text-[#F97316] word-underline word-capital">
                Capital
              </span>
            </span>
          </h1>
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
