
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OXYLOGO from "../assets/img/oxyglobal.png";

import {
  MapPin,
  Mail,
  Building2,
  Globe,
  Users,
  Layers3,
  MessageSquareQuote,
  Boxes,
  PhoneCall,
} from "lucide-react";

// HELPLINE DETAILS
const HELPLINE_NUMBER = "040 4189 7778";
const HELPLINE_LINK = "tel:+914041897778";

// QUICK LINKS
const quickLinks = [
  {
    label: "Team",
    href: "team",
    icon: <Users size={16} />,
  },
  {
    label: "Platforms",
    href: "platforms",
    icon: <Layers3 size={16} />,
  },
  {
    label: "4P Models",
    href: "fourp-models",
    icon: <Boxes size={16} />,
  },
  {
    label: "Testimonials",
    href: "testimonials",
    icon: <MessageSquareQuote size={16} />,
  },
];

const OxyGlobalFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // FOOTER NAVIGATION WITH HEADER OFFSET
  const handleFooterNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const doScroll = () => {
      const target = document.getElementById(id);
      const header = document.getElementById("main-header");

      if (target) {
        const headerHeight = header
          ? header.offsetHeight
          : 90;

        const sectionTop =
          target.getBoundingClientRect().top +
          window.pageYOffset;

        const finalTop =
          sectionTop - headerHeight - 10;

        window.scrollTo({
          top: Math.max(finalTop, 0),
          behavior: "smooth",
        });
      }
    };

    if (location.pathname === "/") {
      doScroll();
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer
      className="
        border-t border-[#e8edf5]
        bg-white px-4 pb-8 pt-12
        text-gray-700
        sm:px-6
        md:px-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto grid max-w-7xl
          grid-cols-1 gap-10
          sm:gap-12
          md:grid-cols-3
        "
      >
        {/* ================================= */}
        {/* LEFT SECTION - COMPANY DETAILS    */}
        {/* ================================= */}

        <div>
          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) =>
              handleFooterNav(e, "home")
            }
            className="inline-block"
          >
            <img
              src={OXYLOGO}
              alt="OXYGLOBAL"
              className="
                mb-5 h-10 w-auto
                object-contain
                sm:h-12 md:h-14 lg:h-16
              "
            />
          </a>

          {/* COMPANY DESCRIPTION */}
          <p
            className="
              max-w-md text-sm
              leading-relaxed text-gray-600
            "
          >
            OXYGLOBAL TECHNOLOGIES is a global
            software technology company building
            scalable digital ecosystems connecting
            people, platforms, products, and capital
            for global innovation.
          </p>

          {/* CEO CONTACT */}
          <div className="mt-6 space-y-3 text-sm">
            <p className="font-semibold text-gray-900">
              Get in Touch with our CEO
            </p>

            <a
              href="mailto:CEO@oxyglobaltech.net"
              className="
                flex items-center gap-2
                break-all
                transition-colors duration-300
                hover:text-[#36A35C]
              "
            >
              <Mail
                size={16}
                className="shrink-0 text-[#36A35C]"
              />

              <span>
                CEO@oxyglobaltech.net
              </span>
            </a>
          </div>
        </div>

        {/* ================================= */}
        {/* MIDDLE SECTION - QUICK LINKS      */}
        {/* ================================= */}

        <div>
          <h3
            className="
              mb-4 text-lg
              font-semibold text-gray-900
            "
          >
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) =>
                    handleFooterNav(e, item.href)
                  }
                  className="
                    flex items-center gap-2
                    text-gray-600
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-[#2F5FAA]
                  "
                >
                  <span className="text-[#2F5FAA]">
                    {item.icon}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================================= */}
        {/* RIGHT SECTION - OFFICE            */}
        {/* ================================= */}

        <div>
          {/* TOLL FREE HELPLINE ABOVE OFFICE */}
          <a
            href={HELPLINE_LINK}
            aria-label={`Call helpline ${HELPLINE_NUMBER}`}
            className="
              group mb-5 inline-flex
              max-w-full flex-wrap
              items-center justify-center
              gap-x-2.5 gap-y-2
              rounded-full
              border border-[#D6E4F5]
              bg-[#F1F6FD]
              px-3 py-2.5
              text-[#2F5FAA]
              transition-all duration-300
              hover:border-[#2F5FAA]
              hover:bg-[#E7F0FB]
              hover:shadow-[0_4px_14px_rgba(47,95,170,0.12)]
            "
          >
            {/* PHONE ICON */}
            <span
              className="
                flex h-8 w-8 shrink-0
                items-center justify-center
                rounded-full bg-[#2F5FAA]/10
              "
            >
              <PhoneCall
                size={17}
                strokeWidth={2.1}
                className="text-[#2F5FAA]"
              />
            </span>

            {/* NUMBER */}
            <span
              className="
                whitespace-nowrap
                text-[13px] font-bold
                sm:text-[14px]
              "
            >
              Toll Free: {HELPLINE_NUMBER}
            </span>

            {/* AVAILABILITY */}
            <span
              className="
                whitespace-nowrap rounded-full
                bg-[#E5F5EA]
                px-2.5 py-1
                text-[10px] font-semibold
                text-[#258344]
              "
            >
              24/7 · 365 Days
            </span>
          </a>

          {/* OFFICE HEADING */}
          <h3
            className="
              mb-4 text-lg
              font-semibold text-gray-900
            "
          >
            Office
          </h3>

          <div className="space-y-4 text-sm">
            {/* HYDERABAD ADDRESS */}
            <div className="flex items-start gap-2">
              <MapPin
                size={16}
                className="
                  mt-1 shrink-0
                  text-[#2F5FAA]
                "
              />

              <span className="leading-relaxed text-gray-600">
                CC-02, Indu Fortune Fields,
                The Annexe, Phase-13,
                <br />
                KPHB, Kukatpally, Hyderabad,
                Telangana - 500085
              </span>
            </div>

            {/* GLOBAL OFFICES */}
            <div className="flex items-start gap-2">
              <Globe
                size={16}
                className="
                  mt-1 shrink-0
                  text-[#36A35C]
                "
              />

              <span className="leading-relaxed text-gray-600">
                We have Global Offices Across
                <br />

                <strong>
                  USA, UK, UAE and Australia
                </strong>
              </span>
            </div>

            {/* CIN */}
            <div className="flex items-center gap-2">
              <Building2
                size={16}
                className="
                  shrink-0 text-[#36A35C]
                "
              />

              <span className="break-all text-gray-600">
                CIN : U70109TG2022PLC168903
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================================= */}
      {/* COPYRIGHT                         */}
      {/* ================================= */}

      <div
        className="
          mx-auto mt-10 flex max-w-7xl
          flex-col items-center
          justify-between gap-3
          border-t border-[#e8edf5]
          pt-6 text-center
          text-sm text-gray-500
          md:mt-12 md:flex-row
          md:text-left
        "
      >
        <p>
          © {new Date().getFullYear()}{" "}
          OXYGLOBAL.TECH — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default OxyGlobalFooter;
