import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <motion.img
              src="C:\Users\laxtc\OneDrive\Pictures\peri2.jpg"
              alt="Periyanan"
              className="rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Hi, I'm Periyanan, a passionate Full Stack Developer skilled in React, Next.js, 
              Tailwind CSS, Node.js, and more. I specialize in creating dynamic, scalable, 
              and user-friendly web applications. Currently interning as a Software Engineer 
              at Hypotism Private Limited, I thrive on solving challenges with cutting-edge 
              technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};