"use client";
import { motion } from "framer-motion";

const customers = [
  {
    id: 1,
    path: "/walter.png",
    delay: 0,
  },
  {
    id: 2,
    path: "/rule-factory.png",
    delay: 0.2,
  },
  {
    id: 3,
    path: "/kultur.png",
    delay: 0.4,
  },
  {
    id: 4,
    path: "/wheycation.png",
    delay: .6,
  },
  {
    id: 5,
    path: "/no-shame.png",
    delay: 0.8,
  },
  {
    id: 6,
    path: "/monsteiner.png",
    delay: 1,
  },
  {
    id: 7,
    path: "/zukkihund.webp",
    delay: 1.2,
  },
  {
    id: 8,
    path: "/raridus.webp",
    delay: 1.4,
  },
];

const Customers = () => {
  return (
    <section className="w-full pt-16">
      <h3 className="font-bold text-2xl text-center">
        Over 5,000 satisfied customers
      </h3>
      <div className="flex gap-10 flex-wrap justify-center items-center mt-5">
        {customers.map((customer) => (
          <div key={customer.id}>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: `${customer.delay}`,
              }}
              viewport={{ once: true }}
              src={customer.path}
              width={100}
              height={100}
              alt="customer"
              className="grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
