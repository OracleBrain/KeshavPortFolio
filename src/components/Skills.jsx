import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      name: 'laravel',
      icon: '🅻',
      proficiency: 95,
      color: 'from-red-500 to-orange-500',
      barColor: 'bg-gradient-to-r from-orange-400 to-orange-600',
    },
    {
      name: 'framer motion',
      icon: '🎭',
      proficiency: 90,
      color: 'from-purple-500 to-pink-500',
      barColor: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    },
    {
      name: 'vue',
      icon: '▼',
      proficiency: 88,
      color: 'from-green-500 to-emerald-500',
      barColor: 'bg-gradient-to-r from-green-400 to-emerald-500',
    },
    {
      name: 'React',
      icon: '⚛️',
      proficiency: 85,
      color: 'from-blue-400 to-cyan-400',
      barColor: 'bg-gradient-to-r from-cyan-400 to-blue-400',
    },
    {
      name: 'Tailwind CSS',
      icon: '🌊',
      proficiency: 92,
      color: 'from-cyan-500 to-blue-500',
      barColor: 'bg-gradient-to-r from-cyan-400 to-teal-500',
    },
    {
      name: 'firebase.js',
      icon: '🔥',
      proficiency: 80,
      color: 'from-yellow-500 to-orange-500',
      barColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    },
    {
      name: 'Python',
      icon: '🐍',
      proficiency: 75,
      color: 'from-blue-500 to-yellow-500',
      barColor: 'bg-gradient-to-r from-blue-500 to-yellow-400',
    },
    {
      name: 'vite',
      icon: '⚡',
      proficiency: 85,
      color: 'from-purple-500 to-yellow-500',
      barColor: 'bg-gradient-to-r from-purple-500 to-yellow-400',
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with to create amazing web experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-3xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon and Name */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>

              {/* Proficiency Label */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                <span className="text-sm font-bold text-primary">{skill.proficiency}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: 'easeOut' }}
                  className={`h-full ${skill.barColor} rounded-full shadow-lg`}
                />
              </div>

              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-3xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Skills;
