import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/periyanan-p',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/itzperi',
      icon: Github,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed left-4 bottom-4 z-50 flex flex-col gap-4"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </motion.div>
  );
};