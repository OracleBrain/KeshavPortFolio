import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'Crypto Dashboard',
      description: 'A modern cryptocurrency tracking dashboard with real-time data',
      image: '📊',
      tags: ['React', 'API', 'Charts'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Elearn Platform',
      description: 'An interactive e-learning platform for online courses',
      image: '📚',
      tags: ['Next.js', 'MongoDB', 'Stripe'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Ai Coach Platform',
      description: 'AI-powered coaching and mentoring platform',
      image: '🤖',
      tags: ['AI', 'Python', 'React'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Task Management',
      description: 'Collaborative task management tool for teams',
      image: '✅',
      tags: ['Vue', 'Firebase', 'Tailwind'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design',
      image: '🌐',
      tags: ['React', 'Framer', 'Tailwind'],
      liveLink: '#',
      codeLink: '#',
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform',
      image: '🏠',
      tags: ['Next.js', 'Prisma', 'Maps'],
      liveLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">A showcase of my recent work</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-7xl overflow-hidden">
                {project.image}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 space-x-4">
                  <a
                    href={project.liveLink}
                    className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    onClick={(e) => e.preventDefault()}
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    className="border-2 border-white text-white hover:bg-white/10 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    onClick={(e) => e.preventDefault()}
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Projects;
