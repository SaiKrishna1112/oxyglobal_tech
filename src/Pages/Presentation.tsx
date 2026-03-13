import React, { useEffect, useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "../LandingPage/Header";
import OxyGlobalFooter from "../LandingPage/Footer";

type Presentation = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  buttonText: string;
  driveLink: string;
  embedLink: string;
};

const presentations: Presentation[] = [
  {
    id: 1,
    subtitle: "OXYGLOBAL.TECH",
    title: "Corporate Presentation",
    description:
      "Explore our business ecosystem, vision, and growth model across People, Platforms, Products, and caPital.",
    points: [
      "Company overview and ecosystem",
      "Technology platforms and business model",
      "Strategic growth and partnerships",
    ],
    image: "https://i.ibb.co/tPKc2qmx/present-1.png",
    imageAlt: "Corporate presentation preview",
    buttonText: "View Presentation",
    driveLink:
      "https://drive.google.com/file/d/1UNzJ06s-4WWZWeV5heFIxQC-12Twf-lf/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1UNzJ06s-4WWZWeV5heFIxQC-12Twf-lf/preview",
  },
  {
    id: 2,
    subtitle: "AI Leadership Initiative",
    title: "Mission Million AI Cofounders",
    description:
      "A mission-driven initiative to empower future AI cofounders, innovators, and leaders building scalable ventures.",
    points: [
      "AI founder mindset",
      "Innovation ecosystem access",
      "Scalable AI venture opportunities",
    ],
    image: "https://i.ibb.co/SX43c1rY/present-2.png",
    imageAlt: "Mission Million AI Cofounders preview",
    buttonText: "Explore Presentation",
    driveLink:
      "https://drive.google.com/file/d/1CAuC2PMF7aaTkjNzRpu3jlzez3cLggEt/view?usp=drive_link",
    embedLink:
      "https://drive.google.com/file/d/1CAuC2PMF7aaTkjNzRpu3jlzez3cLggEt/preview",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalContent: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.97,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};

const PresentationsSection: React.FC = () => {
  const [selectedPresentation, setSelectedPresentation] =
    useState<Presentation | null>(null);

  useEffect(() => {
    if (selectedPresentation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPresentation]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPresentation(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <Header />

      <main className="w-full bg-white pt-20 sm:pt-18 lg:pt-20">
        <section className="w-full px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12 lg:py-16 xl:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
            >
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#2F5FAA] sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Explore Our Presentations
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#3A3A3A] sm:text-base"
              >
                Discover our corporate vision and AI cofounder initiative
                through clean, focused, presentation-led storytelling.
              </motion.p>
            </motion.div>

            {/* Presentation blocks */}
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {presentations.map((item, index) => {
                const reverse = index % 2 === 1;
                const imageVariant = reverse ? fadeRight : fadeLeft;
                const contentVariant = reverse ? fadeLeft : fadeRight;

                return (
                  <div
                    key={item.id}
                    className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
                  >
                    {/* Image Side */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={imageVariant}
                      className={reverse ? "lg:order-2" : ""}
                    >
                      <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
                        <motion.img
                          src={item.image}
                          alt={item.imageAlt}
                          whileHover={{ y: -4, scale: 1.01 }}
                          transition={{ duration: 0.28 }}
                          className="w-full max-h-[260px] rounded-[10px] object-contain shadow-[0px_18px_40px_rgba(0,0,0,0.10)] sm:max-h-[320px] md:max-h-[360px] lg:max-h-[400px] xl:max-h-[420px]"
                        />
                      </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={staggerContainer}
                      className={`${reverse ? "lg:order-1" : ""} px-1 sm:px-2 lg:px-0`}
                    >
                      <motion.div variants={contentVariant}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#36A35C] sm:text-xs md:text-sm">
                          {item.subtitle}
                        </p>
                      </motion.div>

                      <motion.div variants={contentVariant}>
                        <h3 className="mt-3 max-w-[560px] text-2xl font-bold leading-tight text-[#111827] sm:text-3xl md:text-[34px] lg:text-4xl">
                          {item.title}
                        </h3>
                      </motion.div>

                      <motion.div variants={contentVariant}>
                        <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#5C6672] sm:text-base">
                          {item.description}
                        </p>
                      </motion.div>

                      <motion.div
                        variants={staggerContainer}
                        className="mt-6 space-y-4 sm:mt-7 sm:space-y-5"
                      >
                        {item.points.map((point, i) => (
                          <motion.div
                            key={i}
                            variants={itemFade}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#36A35C]" />
                            <p className="text-sm leading-6 text-[#3A3A3A] sm:text-[15px]">
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div variants={itemFade} className="mt-8 sm:mt-9">
                        <motion.button
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelectedPresentation(item)}
                          className="inline-flex items-center justify-center rounded-full bg-[#2F5FAA] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#264d8d]"
                        >
                          {item.buttonText}
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <OxyGlobalFooter />

      {/* Modal */}
      <AnimatePresence>
        {selectedPresentation && (
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-3 py-4 sm:px-6 sm:py-6"
            onClick={() => setSelectedPresentation(null)}
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-3 sm:px-5 sm:py-4">
                <div className="min-w-0 pr-3">
                  <h3 className="truncate text-base font-semibold text-[#111827] sm:text-lg">
                    {selectedPresentation.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-[#6b7280] sm:text-[13px]">
                    View presentation in modal
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedPresentation.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-full border border-[#dbe2ea] px-4 py-2 text-sm font-medium text-[#2F5FAA] transition hover:bg-[#f8fafc] sm:inline-flex"
                  >
                    Open in New Tab
                  </a>

                  <button
                    onClick={() => setSelectedPresentation(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] text-[#334155] transition hover:bg-[#f8fafc]"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Mobile top action */}
              <div className="border-b border-[#eef2f7] px-4 py-2 sm:hidden">
                <a
                  href={selectedPresentation.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#dbe2ea] px-4 py-2 text-xs font-medium text-[#2F5FAA]"
                >
                  Open in New Tab
                </a>
              </div>

              {/* Modal Body */}
              <div className="flex-1 bg-[#f8fafc]">
                <iframe
                  src={selectedPresentation.embedLink}
                  title={selectedPresentation.title}
                  className="h-full w-full"
                  allow="autoplay"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PresentationsSection;
