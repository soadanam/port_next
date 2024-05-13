import { motion } from "framer-motion";
export default function Menu({
    icon,
    active,
    children,
    onClick,
    title,
}) {
    return (
        <li>
            <a
                onClick={onClick}
                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    active && "bg-graydark opacity-70"
                }`}
                href="#"
            >
                {title}
                {icon}
                <motion.svg
                    animate={{ rotate: active ? 180 : 0, y: -8 }}
                    className={`absolute fill-current right-4 top-1/2 `}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                        fill=""
                    />
                </motion.svg>
            </a>

            <motion.div
                animate={{ height: active ? "auto" : 0 }}
                className="overflow-hidden transform translate"
            >
                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                    {children}
                </ul>
            </motion.div>
        </li>
    );
}
