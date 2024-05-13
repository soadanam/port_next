"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProgressBar = ({ percentage, name }) => {
  const [displayText, setDisplayText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (displayText < percentage) {
        setDisplayText((prevText) => prevText + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percentage, displayText]);

  return (
    <div className=" relative">
      <div className="mb-2 flex items-center justify-between gap-4">
        <p color="blue-gray" variant="h6">
          {name}
        </p>
        <motion.p
          initial={{ left: "0%" }}
          animate={{ left: `calc(${percentage}% - 5%) ` }}
          transition={{ duration: 2 }}
          className={`absolute`}
          color="blue-gray"
        >
         {`${displayText}%`}
        </motion.p>
      </div>
      <div className="h-1 w-full bg-gray-200 ">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 2 }}
          className={`h-1 bg-blue-500 w-${percentage}%`}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
