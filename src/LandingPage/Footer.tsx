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
} from "lucide-react";

const quickLinks = [
  { label: "Team", href: "team", icon: <Users size={16} /> },
  { label: "Platforms", href: "platforms", icon: <Layers3 size={16} /> },
  { label: "4P Models", href: "fourp-models", icon: <Boxes size={16} /> },
  {
    label: "Testimonials",
    href: "testimonials",
    icon: <MessageSquareQuote size={16} />,
  },
];

const OxyGlobalFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const doScroll = () => {
      const target = document.getElementById(id);
      const header = document.getElementById("main-header");

      if (target) {
        const headerHeight = header ? header.offsetHeight : 90;
        const sectionTop =
          target.getBoundingClientRect().top + window.pageYOffset;
        const finalTop = sectionTop - headerHeight - 10;

        window.scrollTo({
          top: finalTop,
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
    <footer className="border-t border-[#e8edf5] bg-white px-4 pb-8 pt-12 text-gray-700 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3">
        
        {/* LEFT SECTION */}
        <div>
          <a
            href="#home"
            onClick={(e) => handleFooterNav(e, "home")}
            className="inline-block"
          >
            <img
              src={OXYLOGO}
              alt="OXYGLOBAL"
              className="mb-5 h-10 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
            />
          </a>

          <p className="max-w-md text-sm leading-relaxed text-gray-600">
            OXYGLOBAL TECHNOLOGIES is a  global software technology company
            building scalable digital ecosystems connecting people, platforms,
            products, and capital for global innovation.
          </p>

          {/* CEO CONTACT */}
          <div className="mt-6 space-y-3 text-sm">
            <p className="font-semibold text-gray-900">
              Get in Touch with our CEO
            </p>

            <a
              href="mailto:Radhakrishna.t@oxyglobal.tech"
              className="flex items-center gap-2 break-all transition-colors duration-300 hover:text-[#36A35C]"
            >
              <Mail size={16} className="shrink-0 text-[#36A35C]" />
              <span>CEO@oxyglobaltech.net</span>
            </a>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleFooterNav(e, item.href)}
                  className="flex items-center gap-2 text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-[#2F5FAA]"
                >
                  <span className="text-[#2F5FAA]">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* OFFICE */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Office</h3>

          <div className="space-y-4 text-sm">
            {/* Hyderabad Address */}
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-[#2F5FAA]" />
              <span className="leading-relaxed text-gray-600">
                CC-02, Indu Fortune Fields, The Annexe, Phase-13,
                <br />
                KPHB, Kukatpally, Hyderabad, Telangana - 500085
              </span>
            </div>

            {/* Global Offices */}
            <div className="flex items-start gap-2">
              <Globe size={16} className="mt-1 shrink-0 text-[#36A35C]" />
              <span className="leading-relaxed text-gray-600">
                We have Global Offices Across
                <br />
                <strong>USA, UK, UAE and Australia</strong>
              </span>
            </div>

            {/* CIN */}
            <div className="flex items-center gap-2">
              <Building2 size={16} className="shrink-0 text-[#36A35C]" />
              <span className="text-gray-600">
                CIN : U70109TG2022PLC168903
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-[#e8edf5] pt-6 text-center text-sm text-gray-500 md:mt-12 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} OXYGLOBAL.TECH — All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default OxyGlobalFooter;