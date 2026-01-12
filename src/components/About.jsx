import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { value: '5+', label: 'Education' },
    { value: '10+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Completed' },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Character with Star Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center min-h-[500px]"
          >
            {/* Star Shape Background */}
            <div className="relative">
              <svg
                className="w-[500px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#starGradient)"
                  d="M100 0L125 75L200 100L125 125L100 200L75 125L0 100L75 75Z"
                  transform="translate(0 0)"
                />
              </svg>
              
              {/* Character Image */}
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl"
                >
                  <img 
                    src="about-keshav.png" 
                    alt="Keshav Yadav" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-8 -left-8 w-16 h-16 glass rounded-xl flex items-center justify-center text-3xl shadow-lg z-20"
              >
                ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-12 -right-12 w-16 h-16 glass rounded-xl flex items-center justify-center bg-yellow-500/20 shadow-lg z-20"
              >
                <span className="font-bold text-yellow-400 text-xl">JS</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-16 -left-12 w-16 h-16 glass rounded-xl flex items-center justify-center text-3xl shadow-lg z-20"
              >
                🎨
              </motion.div>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-8 -right-8 w-16 h-16 glass rounded-xl flex items-center justify-center text-3xl shadow-lg z-20"
              >
                💻
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a passionate Computer Science Engineer who transforms ideas into elegant digital solutions. 
                With a strong foundation in CSE, I've developed a deep love for creating web experiences that 
                are not just functional, but beautiful and intuitive. My journey began with curiosity about how 
                things work on the internet, and it's evolved into a full-blown passion for building applications 
                that make a real difference in people's lives.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                Whether it's crafting responsive user interfaces, architecting scalable backends, or diving into 
                the latest technologies, I thrive on challenges that push my boundaries. I believe great software 
                is built at the intersection of clean code, thoughtful design, and genuine empathy for users.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Learn More Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="border-2 border-primary text-white hover:bg-primary/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
