
import React from "react";
import { PhoneCall } from "lucide-react";

type TollFreeHelplineProps = {
  variant?: "footer" | "floating";
};

const PHONE_NUMBER = "040 4189 7778";
const PHONE_LINK = "tel:+914041897778";

const TollFreeHelpline: React.FC<TollFreeHelplineProps> = ({
  variant = "floating",
}) => {
  // FOOTER VERSION
  if (variant === "footer") {
    return (
      <a
        href={PHONE_LINK}
        aria-label={`Call helpline ${PHONE_NUMBER}`}
        className="
          inline-flex max-w-full
          flex-wrap items-center
          justify-center gap-2
          rounded-full
          border border-[#C9DDF5]
          bg-gradient-to-r
          from-[#EAF2FF] via-white to-[#E6F6EC]
          px-3 py-2.5
          shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:shadow-md
          sm:gap-3 sm:px-5 sm:py-3
        "
      >
        <PhoneCall
          size={18}
          className="shrink-0 text-[#2F5FAA]"
        />

        <span
          className="
            text-[12px] font-bold
            text-[#173E78]
            sm:text-base
          "
        >
          Toll Free: {PHONE_NUMBER}
        </span>

        <span
          className="
            rounded-full
            bg-[#F97316]/15
            px-2 py-1
            text-[10px] font-bold
            text-[#D85B0B]
            sm:px-3 sm:text-xs
          "
        >
          24/7 · 365 Days
        </span>
      </a>
    );
  }

  // FLOATING VERSION
  return (
    <a
      href={PHONE_LINK}
      aria-label={`Call OXYGLOBAL helpline ${PHONE_NUMBER}`}
      className="
        fixed right-3
        bottom-[calc(12px+env(safe-area-inset-bottom))]
        z-[100]
        flex min-h-[44px] w-[128px]
        items-center justify-end
        focus-visible:rounded-full
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[#36A35C]

        sm:bottom-6 sm:right-6
        sm:min-h-0 sm:w-auto
      "
    >
      {/* VISIBLE HELPLINE PILL */}
      <span
        className="
          flex h-[34px] w-full
          items-center gap-[5px]
          rounded-full
          border border-[#7295CE]
          bg-gradient-to-r
          from-[#173D7B] to-[#2F5FAA]
          px-[6px] py-1
          shadow-[0_5px_15px_rgba(47,95,170,0.24)]
          transition-all duration-300
          hover:-translate-y-0.5

          sm:h-auto sm:w-auto
          sm:gap-3 sm:px-4 sm:py-3
          sm:shadow-[0_12px_35px_rgba(47,95,170,0.32)]
        "
      >
        {/* SMALL MOBILE PHONE ICON */}
        <span
          className="
            relative flex h-[20px] w-[20px]
            shrink-0 items-center justify-center
            rounded-full bg-[#F97316]
            text-white
            sm:h-11 sm:w-11
          "
        >
          <PhoneCall
            size={11}
            strokeWidth={2.2}
            className="sm:h-[21px] sm:w-[21px]"
          />

          {/* STATUS INDICATOR */}
          <span
            className="
              absolute -right-0.5 -top-0.5
              h-[6px] w-[6px]
              rounded-full
              border border-[#173D7B]
              bg-[#36A35C]
              sm:-right-1 sm:-top-1
              sm:h-3.5 sm:w-3.5
            "
          />
        </span>

        {/* HELPLINE INFORMATION */}
        <span
          className="
            flex min-w-0 flex-col
            gap-[1px]
            sm:gap-1
          "
        >
          {/* TOP LABEL */}
          <span
            className="
              flex items-center
              gap-[3px] whitespace-nowrap
              text-[6.5px] font-bold
              uppercase leading-[9px]
              tracking-normal text-white

              sm:gap-2
              sm:text-[11px]
              sm:leading-normal
              sm:tracking-wide
            "
          >
            <span className="sm:hidden">
              Toll Free Help
            </span>

            <span className="hidden sm:inline">
              Toll Free Helpline
            </span>

            <span className="text-[#36A35C]">
              •
            </span>

            <span className="text-[#9FE3B0]">
              24/7
            </span>
          </span>

          {/* PHONE NUMBER */}
          <span
            className="
              whitespace-nowrap
              text-[10px] font-extrabold
              leading-[13px] tracking-normal
              text-white

              sm:text-[18px]
              sm:leading-normal
              sm:tracking-wide
            "
          >
            {PHONE_NUMBER}
          </span>
        </span>
      </span>
    </a>
  );
};

export default TollFreeHelpline;
