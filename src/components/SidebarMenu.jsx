"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import Link from "next/link";

const SidebarMenu = ({flex}) => {
  const [visibleWidth, setVisibleWidth] = useState(false);

  let initial;
  if(flex){
    initial = {
      marginLeft: -250,
    }
  }
    else{
      initial = {
        x: -250,
      }
    }
  

  let animate;
  if(flex){
    animate = {
      marginLeft:visibleWidth ? 0 : -250,
    }
  }else{
    animate = {
       x: visibleWidth ? 0 : -250 
    }
  }
  return (
    <>
      <motion.div 
      className="min-w-[300px]"
      initial={initial}
      animate={animate}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      onMouseEnter={() => setVisibleWidth(true)}
      onMouseLeave={() => setVisibleWidth(false)}
      />
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
        }}
        onMouseEnter={() => setVisibleWidth(true)}
        onMouseLeave={() => setVisibleWidth(false)}
        className={`min-w-[300px] bg-red-500 shadow-lg min-h-full fixed left-0  z-50`}
      >
        <div className={ "absolute right-2 top-[40%]"}>
          <div className="">
            <IoMenuSharp size={30} className="cursor-pointer" />
            <CgMenuGridR
              size={30}
              className="cursor-pointer hover:text-amber-700"
            />
          </div>
        </div>
        <div className=" flex justify-center items-center min-h-full">
          <ul className="font-akhond_bold mt-40 space-y-5 text-center">
            <li>
              <Link href="/" className="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link href="portfolio" className="cursor-pointer">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="about-us" className="cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link href="admin/login" className="cursor-pointer">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
      </>
  );
};

export default SidebarMenu;
