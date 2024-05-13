
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MenuItems({
  children,
  link,
  index,
  setActiveMenu,
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === link) {
      setActiveMenu(index);
    }
  }, []);
  return (
    <li
      className={`${
        pathname === link && "bg-blue-gray-300"
      } transition-colors duration-200 rounded-lg`}
    >
      <Link
        className="group relative flex items-center gap-2.5 px-4 py-1 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white"
        href={link}
      >
        {children}
      </Link>
    </li>
  );
}
