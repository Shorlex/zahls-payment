"use client";
import { delay, motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const plans = [
  {
    id: 1,
    title: "Advanced",
    body: "For those who want more.",
    price: "2.6%",
    chf: "+ CHF 0.30",
    delay: 0,
  },
  {
    id: 2,
    title: "Professionals",
    body: "For everyone who knows what's going on.",
    price: "2.3%",
    chf: "+ CHF 0.25",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Experts",
    body: "For those who only want the best",
    price: "2.0%",
    chf: "+ CHF 0.20",
    delay: 1.2,
  },
];

const PricingPlans = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center xl:justify-between items-center gap-10 pt-20">
      {plans.map((plan) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "linear",
            delay: `${plan.delay}`
          }}
          viewport={{ once: true }}
          key={plan.id}
          className="w-full md:w-[380px] bg-gradient-to-t from-white to-[#E8E2EE] p-5 rounded-xl"
        >
          <div className="w-full bg-[#562C7F] p-2 rounded-xl text-white mx-auto">
            <h3 className="text-center text-xl font-semibold">{plan.title}</h3>
            <p className="text-center text-sm">{plan.body}</p>
          </div>
          <div className="flex flex-col gap-0 items-center mt-10">
            <h3 className="font-bold text-6xl">
              {plan.price} <span className="text-lg font-thin">{plan.chf}</span>
            </h3>
            <p className="text-center">per transaction</p>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <p className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-black text-white text-sm flex items-center justify-center mt-1">
                <FaCheck />
              </span>{" "}
              CHF 15.00 per month
            </p>
            <p className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-black text-white text-sm flex items-center justify-center mt-1">
                <FaCheck />
              </span>{" "}
              No startup costs
            </p>
            <p className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-black text-white text-sm flex items-center justify-center mt-1">
                <FaCheck />
              </span>{" "}
              Ticket-base support
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-0 items-center">
            <button className="flex gap-4 px-4 py-2 bg-[#ded5e7] text-black rounded-full">
              <span className="mt-2">Register for free</span>
              <span className="bg-white text-black p-3 rounded-full">
                <FaArrowRight />
              </span>
            </button>
            <p className="text-sm font-thin text-slate-400 mt-1">
              quick and easy - we promised!
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingPlans;
