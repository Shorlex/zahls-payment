"use client";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa6";

const plans = [
  {
    id: 1,
    title: "Beginners",
    fee: "1.6%",
    chf: "+ CHF 0.30",
    delay: 0,
  },
  {
    id: 2,
    title: "Advanced",
    fee: "1.3%",
    chf: "+ CHF 0.30",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Professional",
    fee: "1.0%",
    chf: "+ CHF 0.25",
    delay: 1.2,
  },
  {
    id: 4,
    title: "Expert",
    fee: "0.7%",
    chf: "+ CHF 0.20",
    delay: 1.8,
  },
];

const ExternalProvider = () => {
  return (
    <section className="w-full pt-24">
      <div>
        <div>
          <h3 className="font-semibold text-center text-4xl">
            Would you like to connect other<br></br> payment methods as
            adapters?
          </h3>
          <p className="text-center mt-5">
            No problem - here too, we have a simple and understandable fee model
          </p>
        </div>
        <Link
          href={""}
          className="flex gap-2 shadow-md shadow-[#342941] w-60 p-2 rounded-lg justify-center items-center my-5 mx-auto text-[#562C7F] font-semibold"
        >
          <span className="mt-1">
            <FaLink />
          </span>{" "}
          <span>External payment providers</span>
        </Link>
        <div className="w-full mt-10 flex flex-wrap gap-5 justify-center lg:justify-between items-center">
          {plans.map((plan) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: `${plan.delay}`
              }}
              viewport={{ once: true }}
              key={plan.id}
              className="w-[250px] bg-gradient-to-t from-white to-[#E8E2EE] p-5 rounded-xl text-center"
            >
              <p>{plan.title}</p>
              <h3 className="mt-2 font-bold text-4xl">{plan.fee}</h3>
              <p>{plan.chf}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExternalProvider;
