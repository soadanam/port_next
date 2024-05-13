
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import Menu from "./_partials/Menu";
import MenuItems from "./_partials/MenuItems";
import { GlobalContext } from "@/src/context/GlobalContext";

const Sidebar = () => {

  const { setSidebarOpen, sidebarOpen } = useContext(GlobalContext);
  const [activeMenu, setActiveMenu] = useState(1);
  return (
    <>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "18.125rem" }}
        animate={{
          width: sidebarOpen ? "18.125rem" : "0rem",
          transform: sidebarOpen ? "0rem" : "translateX(-100%)",
        }}
      >
        <div className="absolute left-0 top-0 z-9999 flex h-screen justify-between pb-4 w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 bg-gray-200">
          <div>
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
              <div className="flex items-center justify-between w-full text-gray">
                <Link href="/admin" className="flex items-center gap-3 w-fit">
                  <MdAdminPanelSettings size={35} />
                  <h3 className="font-bold">Admin Panel</h3>
                </Link>
                <Link href="/" className="w-fit">
                  <RiHome6Fill size={28} />
                </Link>
              </div>

              <button
                className="block lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
              <nav
                className="px-4 py-4 mt-5 lg:mt-9 lg:px-6"
                x-data="{selected: $persist('Dashboard')}"
              >
                <div>
                  {/* <h3 className="mb-4 ml-4 text-sm font-medium text-bodydark2">
                                        MENU
                                    </h3> */}

                  <Link
                    href={"/dashboard"}
                    className="flex items-center gap-3 mb-4 ml-4 font-bold cursor-pointer text-md text-bodydark2"
                  >
                    <MdDashboard /> Dashboard
                  </Link>

                  <ul className="mb-6 flex flex-col gap-1.5">
                    <Menu
                      title="Portfolio"
                      active={activeMenu === 1}
                      onClick={() =>
                        setActiveMenu((prev) => (prev === 1 ? 0 : 1))
                      }
                    >
                      <MenuItems
                        index={1}
                        setActiveMenu={setActiveMenu}
                        link={"/admin/all-portfolio"}
                      >
                        All Portfolio
                      </MenuItems>
                      <MenuItems
                        index={1}
                        setActiveMenu={setActiveMenu}
                        link={"/admin/add-portfolio"}
                      >
                        Add Portfolio
                      </MenuItems>
                      <MenuItems
                        index={1}
                        setActiveMenu={setActiveMenu}
                        link={"/admin/edit-portfolio"}
                      >
                        Edit Portfolio
                      </MenuItems>
                    </Menu>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div
            className="flex items-center gap-3 px-8 py-2 ml-auto mr-8 text-[#1C2434] bg-gray w-fit cursor-pointer"
            onClick={() => signOut()}
          >
            <h3>Logout</h3>
            <TbLogout2 />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

