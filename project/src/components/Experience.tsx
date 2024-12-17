import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    title: 'SDE Intern',
    company: 'Hypotism Private Limited',
    period: 'Dec 2024 - Present',
  },
  {
    title: 'Web Developer Intern',
    company: 'Future Intern',
    period: 'Aug 2024 - Sep 2024',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.company}</p>
                <p className="text-gray-400 text-sm">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};