'use client'
import { MdArrowOutward } from "react-icons/md";
import { PiCardsFill } from "react-icons/pi";
import { FaRocket, FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";

const advantages = [
  {
    id: 1,
    delay: 1,
    icon: <MdArrowOutward />,
    title: "No fixed and setup costs",
    body: "Recieve payemnet with no seed capital. zahls.ch only costs if you also generate sales. Our entry-level model makes it possible!",
  },
  {
    id: 2,
    delay: .4,
    icon: <PiCardsFill />,
    title: "No website? No problem!",
    body: "Use our payment link or simply create a paymeny page in munites.",
  },
  {
    id: 3,
    delay: .8,
    icon: <FaRocket />,
    title: "Ready to go quickly",
    body: "You will be ready to accept payments shortly",
  },
  {
    id: 4,
    delay: .6,
    icon: <FaCode />,
    title: "Seamlessly Integrated",
    body: "zahls.ch offers connections for all common shop systems",
  },
];

const Advantages = () => {
  return (
    <section className="w-full pt-24">
      <div className="flex flex-col gap-4  lg:flex-row md:justify-between md:items-center">
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "linear" }}
          viewport={{ once: true }}
          className="font-bold text-5xl"
        >
          Recieve payments<br className="hidden lg:block"></br> easily and
          securely
        </motion.h3>
        <motion.h5
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "linear", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Zahls.ch has many advantages. Whether for large companies or
          <br className="hidden lg:block"></br> your first own online shop - we
          are there for everyone.
        </motion.h5>
      </div>
      <br></br>
      <hr></hr>
      <div className="flex flex-wrap gap-5 justify-center items-center lg:justify-between">
        {advantages.map((advantage) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "linear", delay: `${advantage.delay}` }}
            viewport={{ once: true }}
            key={advantage.id}
            className=" lg:h-36 w-full lg:w-[48%] mt-5 bg-gradient-to-l from-white to-[#E8E2EE] p-5 rounded-lg shadow-md"
          >
            <div className="w-10 h-10 rounded-full bg-[#E8E2EE] shadow-sm shadow-[#562C7F] text-[#562C7F] flex justify-center items-center ">
              {advantage.icon}
            </div>
            <h3 className="font-bold mt-2">{advantage.title}</h3>
            <p>{advantage.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
