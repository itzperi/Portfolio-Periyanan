import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Brainwave SAAS Landing Page',
    description: 'A modern AI-powered SAAS platform with stunning UI/UX and interactive features',
    liveUrl: 'https://brainwave-peri-project.vercel.app/',
    githubUrl: 'https://github.com/itzperi/BrainwavePeriProject',
    image: 'C:\Users\laxtc\Pictures\Screenshots\Screenshot 2024-12-15 183414.png'
  },
  {
    title: 'Neuromarketing Agency',
    description: 'A modern marketing agency website focused on brain-based marketing strategies',
    liveUrl: 'https://strong-zabaione-f16ce3.netlify.app/',
    image: 'C:\Users\laxtc\Pictures\Screenshots\Screenshot 2024-12-15 183332.png'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};