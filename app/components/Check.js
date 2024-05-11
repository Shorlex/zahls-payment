import React from "react";
import { FaCheck, FaLock } from "react-icons/fa6";

const Check = () => {
  return (
    <div className="w-[180px] h-[200px] px-2 py-1 bg-white rounded-lg">
      <button className="w-full bg-[#562C7F] text-white rounded-full">
        zahls
      </button>
      <div className="bg-[#40E6AC] w-10 h-10 rounded-full text-white flex justify-center items-center mt-5 mx-auto ">
        <FaCheck />
      </div>
      <h3 className="mt-1 text-center font-bold text-xl">CHF 99.0</h3>
      <p className="text-[10px] text-center text-slate-400">
        Die Zahlung wurde ausgefulhrt
      </p>
      <div className="relative mt-5">
        <hr></hr>
        <div className="w-10 h-10 rounded-full bg-white text-slate-200 flex justify-center items-center absolute -top-5 left-1/3">
          <FaLock />
        </div>
        <p className=" mt-6 text-[8px] text-center text-slate-400">
          Encrypted transaction under 256-Bit SSL
        </p>
      </div>
    </div>
  );
};

export default Check;
