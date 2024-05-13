"use client";
import { GlobalContext } from "@/src/context/GlobalContext";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useContext(GlobalContext);
  return (
    <header className="sticky top-0 flex w-full z-999 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex items-center px-2 py-4">
        <FaBars
          color="#1C2434"
          size={24}
          onClick={() => setSidebarOpen((prev) => !prev)}
          className={`${sidebarOpen ? "rotate-180" : "-rotate-180"} transition duration-300 cursor-pointer`}
        />
      </div>
    </header>
  );
}
