import { motion } from "framer-motion";

import NotFoundImage from "../assets/6325257.jpg";

export default function NotFoundPage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-gray-800 dark:text-white p-4"
      style={{ backgroundImage: `url(${NotFoundImage})` }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen   bg-opacity-50 p-8 rounded-lg text-center">
        <motion.p
          className="text-lg md:text-xl mt-[-390px] ml-[40px] font-semibold shadow-md text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          currently available on local host only.
        </motion.p>
      </div>
    </div>
  );
}
