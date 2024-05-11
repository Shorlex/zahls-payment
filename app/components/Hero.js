"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaUsers } from "react-icons/fa6";
import Check from "./Check";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-t from-white to-[#E8E2EE] mt-5 rounded-2xl px-2">
      <div className="flex flex-col gap-8 justify-center items-center pt-10">
        <h1 className="text-4xl text-center font-semibold md:text-6xl">
          {" "}
          Recieve Payment Digitally{" "}
        </h1>
        <p className="text-center">
          {" "}
          With zahls.ch recieving payment is easy. Integrate various payment
          options such as<br className="hidden md:block"></br> credit cards,
          PostFinance or TWINT into your online shope with zahls.ch
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
        {/* STATS */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          <div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <div className="w-5 h-5 bg-gradient-to-t from-[#BCA7E3] to-[#562C7F] clip-custom"></div>
                <div className="w-5 h-5 bg-gradient-to-t from-[#BCA7E3] to-[#562C7F] clip-custom"></div>
                <div className="w-5 h-5 bg-gradient-to-t from-[#BCA7E3] to-[#562C7F] clip-custom"></div>
                <div className="w-5 h-5 bg-gradient-to-t from-[#BCA7E3] to-[#562C7F] clip-custom"></div>
                <div className="w-5 h-5 bg-gradient-to-t from-[#BCA7E3] to-[#562C7F] clip-custom"></div>
              </div>
              <h5 className="font-bold">5 Stars</h5>
            </div>
            <p className="text-slate-400">On Wordpress.com</p>
          </div>
          <div>
            <div className="flex gap-4">
              <div>
                <FaUsers className="text-[#562C7F] text-2xl" />
              </div>
              <h5 className="font-bold">5000 +</h5>
            </div>
            <p className="text-slate-400">Satisfied Customers</p>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[300px] md:h-[450px] lg:h-[600px] mt-20 mx-auto relative">
        <Image
          src={"/hero-bg-4.webp"}
          width={1000}
          height={600}
          alt="hero-bg"
          className="w-full h-[300px] md:h-[450px] lg:h-[600px] rounded-2xl"
        />
        <div className="w-[300px] h-[150px] absolute top-1 md:top-10 left-5">
          <h3 className="font-bold text-white">Payment Methods</h3>
          <div className="flex gap-2 mt-1 md:mt-4 flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              viewport={{ once: true }}
              className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg"
            >
              <Image src={"/Visa.png"} width={50} height={30} alt="visa" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg"
            >
              <Image src={"/g-pay.png"} width={50} height={30} alt="visa" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 1.2,
              }}
              viewport={{ once: true }}
              className="w-[100px] h-[35px] bg-white flex justify-center items-center rounded-lg"
            >
              <Image
                src={"/post-finance.png"}
                width={150}
                height={150}
                alt="visa"
              />
            </motion.div>
          </div>
          <div className="flex gap-2 mt-2 flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 3.0,
              }}
              viewport={{ once: true }}
              className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg"
            >
              <Image
                src={"/master-card.png"}
                width={50}
                height={30}
                alt="visa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 2.4,
              }}
              viewport={{ once: true }}
              className="w-[70px] h-[35px] bg-white flex justify-center items-center rounded-lg"
            >
              <Image
                src={"/Apple-Pay.webp"}
                width={50}
                height={30}
                alt="visa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 1.8,
              }}
              viewport={{ once: true }}
              className="w-[100px] h-[35px] bg-white flex justify-center items-center rounded-lg"
            >
              <Image src={"/Twint.webp"} width={70} height={50} alt="visa" />
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="hidden md:block absolute bottom-10 left-5"
        >
          <Check />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "linear",
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="hidden md:block absolute right-5 bottom-10 "
        >
          <Image
            src={"/hero-3.jpg"}
            width={3000}
            height={3000}
            alt="hero-3"
            className="w-[250px] h-[150px] rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
