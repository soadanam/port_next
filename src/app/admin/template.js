"use client";
import { motion } from "framer-motion";

const layout = ({ children }) => {
  return (
    <motion.div className="bg-red-600"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Your layout components */}
      {children}
    </motion.div>
  );
};

export default layout;
