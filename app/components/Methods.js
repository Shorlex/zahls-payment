'use client'
import { delay, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const methods = [
  {
    id: 1,
    path: "/Visa.png",
    width: 28,
    img: 100,
    delay: 1.2
  },
  {
    id: 2,
    path: "/Twint.png",
    width: 32,
    img: 100,
    delay: 1.4
  },
  {
    id: 3,
    path: "/post-finance.png",
    width: 400,
    img: 160,
    delay: 1.6
  },
  {
    id: 4,
    path: "/g-pay.png",
    width: 32,
    img: 80,
    delay: 1.8
  },
  {
    id: 5,
    path: "/Apple-Pay.png",
    width: 32,
    img: 80,
    delay: 2
  },
  {
    id: 6,
    path: "/master-card.png",
    width: 36,
    img: 80,
    delay: 2.2
  },
];

const Methods = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      viewport={{ once: true }}
      className="w-full h-[600px] mt-20 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#6C2CA7] via-[#120130] to-black"
    >
      <div className="h-full text-white flex flex-col gap-6 justify-center items-center p-3">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          className="text-center p-5 text-4xl md:text-6xl"
        >
          Swiss payment<br></br> solution for the web
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          zahls.ch allows you to easily process payments with numerous payments
          methods on<br className="hidden md:block"></br> your websites or
          shops. We offer all common means of payment, including local
          <br className="hidden md:block"></br> providers such as TWINT and
          PostFinance.
        </motion.p>
        <div className="flex flex-wrap gap-3">
          {methods.map((item) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "linear", delay: `${item.delay}` }}
              viewport={{ once: true }}
              key={item.id}
              className={`bg-white px-3 w-${item.width} h-16 flex justify-center items-center rounded-xl`}
            >
              <Image
                src={item.path}
                width={item.img}
                height={100}
                alt="methods"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Methods;
