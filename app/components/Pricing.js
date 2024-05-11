"use client";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import PricingPlans from "./PricingPlans";
import ExternalProvider from "./ExternalProvider";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="w-full pt-24">
      <div className="flex flex-col gap-8 justify-center items-center pt-10">
        <h1 className="text-4xl text-center md:text-6xl">
          {" "}
          One price for all functions{" "}
        </h1>
        <p className="text-center">
          {" "}
          Simple and clear - for credit cards, PostFinance and TWINT
        </p>
        {/* CALL TO ACTION */}
        <div className="flex gap-6 justify-center items-center">
          <button className="flex gap-4 px-4 py-2 bg-[#562C7F] text-white rounded-full">
            <span className="mt-2">Register for free</span>
            <span className="bg-white text-black p-3 rounded-full">
              <FaArrowRight />
            </span>
          </button>
          <Link href={"#prices"} className="underline hidden md:block">
            View Prices
          </Link>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-2/3 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#6C2CA7] via-[#120130] to-black rounded-xl flex flex-col md:flex-row gap-5 p-3 md:p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 flex flex-col gap-10 text-white"
            >
              <h3 className="text-2xl md:text-4xl font-bold">Beginners</h3>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">2.9%</h3>
                <p className="text-2xl font-thin">+ CHF 0.30</p>
                <p className="text-sm font-thin text-slate-400">
                  per transaction
                </p>
              </div>
              <div>
                <button className="flex gap-4 px-4 py-2 bg-[#ded5e7] text-black rounded-full">
                  <span className="mt-2">Register for free</span>
                  <span className="bg-white text-black p-3 rounded-full">
                    <FaArrowRight />
                  </span>
                </button>
                <p className="text-sm font-thin text-slate-400 mt-1">
                  easy and fast without obligation!
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="w-full md:w-3/5 px-2 md:border-l md:border-gray-500 md:px-5 text-white"
            >
              <div className="flex flex-col gap-3">
                <p className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#40E6AC] text-black text-sm flex items-center justify-center mt-1">
                    <FaCheck />
                  </span>{" "}
                  No monthly fee
                </p>
                <p className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#40E6AC] text-black text-sm flex items-center justify-center mt-1">
                    <FaCheck />
                  </span>{" "}
                  No startup costs
                </p>
                <p className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#40E6AC] text-black text-sm flex items-center justify-center mt-1">
                    <FaCheck />
                  </span>{" "}
                  Ticket-base support
                </p>
              </div>
              <div className="w-[300px] h-[150px] mt-5">
                <h3 className="font-bold text-white">
                  Supported payment methods
                </h3>
                <div className="flex gap-2 mt-1 md:mt-4">
                  <div className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg">
                    <Image
                      src={"/Visa.png"}
                      width={50}
                      height={30}
                      alt="visa"
                    />
                  </div>
                  <div className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg">
                    <Image
                      src={"/g-pay.png"}
                      width={50}
                      height={30}
                      alt="visa"
                    />
                  </div>
                  <div className="w-[100px] h-[35px] bg-white flex justify-center items-center rounded-lg">
                    <Image
                      src={"/post-finance.png"}
                      width={150}
                      height={150}
                      alt="visa"
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg">
                    <Image
                      src={"/master-card.png"}
                      width={50}
                      height={30}
                      alt="visa"
                    />
                  </div>
                  <div className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg">
                    <Image
                      src={"/Apple-Pay.webp"}
                      width={50}
                      height={30}
                      alt="visa"
                    />
                  </div>
                  <div className="w-[100px] h-[35px] bg-white flex justify-center items-center rounded-lg">
                    <Image
                      src={"/Twint.webp"}
                      width={70}
                      height={50}
                      alt="visa"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "linear",
              delay: 1.2,
            }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 bg-gradient-to-b from-white to-[#E8E2EE] border border-[#E8E2EE] rounded-xl flex flex-col gap-5 justify-center items-center p-10"
          >
            <h1 className="text-2xl text-center md:text-4xl">
              {" "}
              Are you recieving high volume?{" "}
            </h1>
            <p className="text-center">
              {" "}
              We would be happy to make you an individual offer. Fell free to
              contact us. We look forward to your inquiry
            </p>
            {/* CALL TO ACTION */}
            <div className="flex gap-6 justify-center items-center">
              <button className="flex gap-4 px-4 py-2 bg-[#ded5e7] rounded-full">
                <span className="mt-2">Register for free</span>
                <span className="bg-white text-black p-3 rounded-full">
                  <FaArrowRight />
                </span>
              </button>
              <Link href={"#prices"} className="underline hidden md:block">
                View Prices
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <PricingPlans />
      <ExternalProvider />
    </section>
  );
};

export default Pricing;
