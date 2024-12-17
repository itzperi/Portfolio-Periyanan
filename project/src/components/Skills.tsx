import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Appwrite.js', 'Python'],
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Others',
    icon: Code2,
    technologies: ['Git', 'Vercel', 'Netlify', 'Chart.js', 'Hostinger'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="text-gray-300 hover:text-white transition-colors">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};