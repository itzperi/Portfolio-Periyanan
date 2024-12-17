import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    title: 'BTech CSE',
    institution: 'Amrita Vishwa Vidyapeetham',
    period: '2024-2028',
  },
  {
    title: 'Higher Secondary',
    institution: 'Thiruthangal Nadar Chennai',
    period: '2022-2024',
  },
  {
    title: 'CBSE',
    institution: 'Kavi Bharathi Vidyalaya Chennai',
    period: 'Class LKG- 10',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.institution}</p>
                <p className="text-gray-400 text-sm">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};