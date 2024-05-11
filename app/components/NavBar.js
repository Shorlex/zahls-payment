"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [menu, setMenu] = useState(false);


  const menuVarient = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const menuListVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear", delay: .2 }}
      viewport={{ once: true }}
      className="w-full h-[10vh] py-4"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          {/* LOGO */}
          <Link href={"/"}>
            <h1 className="font-bold text-[#0F061B] text-xl">ZAHLS</h1>
          </Link>
          {/* LINKS */}
          <div className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href={""}>Pricing</Link>
              </li>
              <li>
                <Link href={""}>Features</Link>
              </li>
              <li>
                <Link href={""}>Use Cases</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* ACCOUNTS */}
        <div className="hidden md:flex gap-4 items-center ">
          <Link href={""}>Sign In</Link>
          <button className="flex gap-4 px-4 py-2 bg-[#E8E2EE] rounded-full">
            <span className="mt-1">Register for free</span>
            <span className="bg-white p-3 rounded-full">
              <FaArrowRight />
            </span>
          </button>
        </div>
        {/* HAMBUGGER MENU */}
        <div className="md:hidden" onClick={() => setMenu(!menu)}>
          <button>
            <FaBars />
          </button>
        </div>
      </div>
      {menu && (
        <motion.div
          variants={menuVarient}
          initial="closed"
          animate="opened"
          className="w-full h-[70vh]  text-black md:hidden relative rounded-2xl backdrop-blur-xl"
        >
          <ul className="flex flex-col h-full gap-6 items-center justify-center">
            <motion.li variants={menuListVariant}>
              <Link href={""}>Pricing</Link>
            </motion.li>
            <motion.li variants={menuListVariant}>
              <Link href={""}>Features</Link>
            </motion.li>
            <motion.li variants={menuListVariant}>
              <Link href={""}>Use Cases</Link>
            </motion.li>
            <motion.li variants={menuListVariant}>
              <Link href={""}>Sign In</Link>
            </motion.li>
            <motion.li variants={menuListVariant}>
              <button className="flex gap-4 px-4 py-2 bg-[#E8E2EE] text-black rounded-full">
                <span className="mt-1">Register for free</span>
                <span className="bg-white p-3 rounded-full">
                  <FaArrowRight />
                </span>
              </button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
