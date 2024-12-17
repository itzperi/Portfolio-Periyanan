import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: 'BTech CSE',
    institution: 'Amrita Vishwa Vidyapeetham',
    period: '2024-2028',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'Higher Secondary',
    institution: 'Thiruthangal Nadar Chennai',
    period: '2022-2024',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'CBSE',
    institution: 'Kavi Bharathi Vidyalaya Chennai',
    period: 'Till Class 10',
    icon: GraduationCap,
  },
  {
    type: 'experience',
    title: 'SDE Intern',
    institution: 'Hypotism Private Limited',
    period: 'Dec 2024 - Present',
    icon: Briefcase,
  },
  {
    type: 'experience',
    title: 'Web Developer Intern',
    institution: 'Future Intern',
    period: 'Aug 2024 - Sep 2024',
    icon: Calendar,
  },
];

export const Timeline = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Experience & Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-4 mb-8"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
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