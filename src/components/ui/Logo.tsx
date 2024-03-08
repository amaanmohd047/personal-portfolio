import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      className="overflow-hidden w-16 absolute left-2 top-4"
      initial={{ translateY: -48, scale: 0, opacity: 0 }}
      animate={{ translateY: 0, scale: 1, opacity: 1 }}
      transition={{ type: "tween", duration: 0.7 }}
    >
      <img src="/logoNoBorder.png" alt="Logo" />
    </motion.div>
  );
}

export default Logo;
