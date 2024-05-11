"use client";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaMessage,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa6";
import {
  HiAdjustmentsHorizontal,
  HiCurrencyDollar,
  HiHandThumbUp,
  HiPuzzlePiece,
} from "react-icons/hi2";

const functions = [
  {
    id: 1,
    icon: <HiAdjustmentsHorizontal />,
    title: "All functions",
    body: "We just love it. With every subscription, all functions are available at no extral charge",
    delay: 0,
  },
  {
    id: 2,
    icon: <HiPuzzlePiece />,
    title: "All integrations",
    body: "With our free plugins, you can easily integrate zahls.ch into your shop system - like WooCommerce",
    delay: 0.6,
  },
  {
    id: 3,
    icon: <HiCurrencyDollar />,
    title: "All currencies",
    body: "Zahls.ch can recieve payment in all common currencies",
    delay: 1.8,
  },
  {
    id: 4,
    icon: <HiHandThumbUp />,
    title: "Satisfied Customer",
    body: "Each his own thing: Your customers choose their preferred payment method, among othet things. TWINT",
    delay: 1.2,
  },
];

const socials = [
  <FaMessage />,
  <FaTwitter />,
  <FaInstagram />,
  <FaPaperPlane />,
  <FaFacebook />,
];

const Functions = () => {
  return (
    <>
      <section className="w-full py-24 mt-24 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#6C2CA7] via-[#120130] to-black text-white flex flex-col gap-10 items-center justify-center">
        <div className="text-center">
          <h3 className="font-semibold text-4xl">
            All functions for<br></br>every subscription
          </h3>
          <p>Simple and clear</p>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-0  lg:gap-10 justify-center items-center">
          {functions.map((item) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: `${item.delay}`
              }}
              viewport={{ once: true }}
              key={item.id}
              className="w-full md:w-1/2 md:mt-20 lg:w-2/5 flex flex-col gap-5 justify-center items-center px-10 lg:px-28"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#50217c] text-[#E8E2EE] text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-center">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <footer className="py-5 flex flex-col justify-center items-center gap-3 md:flex-row md:gap-0 md:justify-between">
        <div className="text-[#6C2CA7]">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
        <div className="flex gap-5">
          {socials.map((item, index) => (
            <div
              key={index}
              className="w-7 h-7 text-sm text-[#E8E2EE] rounded-full flex justify-center items-center bg-[#6C2CA7]"
            >
              {item}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Functions;
