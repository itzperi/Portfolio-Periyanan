import { Power } from 'lucide-react';
import { motion } from 'framer-motion';

interface PowerButtonProps {
  isPowered: boolean;
  onToggle: () => void;
}

export const PowerButton = ({ isPowered, onToggle }: PowerButtonProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`absolute bottom-8 right-8 z-50 p-4 rounded-full ${
        isPowered ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-red-500 shadow-lg shadow-red-500/50'
      } hover:scale-110 transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Power className="w-6 h-6 text-white" />
      <motion.div
        className={`absolute inset-0 rounded-full ${
          isPowered ? 'bg-green-400' : 'bg-red-400'
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};