import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { icon: '📷', name: 'Instagram', color: 'from-purple-600 to-pink-500' },
    { icon: '🎵', name: 'TikTok', color: 'from-black to-cyan-400' },
    { icon: '⚡', name: 'GitHub', color: 'from-gray-700 to-gray-900' },
    { icon: '▶️', name: 'YouTube', color: 'from-red-600 to-red-700' },
  ];

  const floatingIcons = [
    { emoji: '👋', text: 'Hi', position: 'top-0 left-10' },
    { emoji: '🎨', text: 'Ai', position: 'top-20 right-0' },
    { emoji: '⚛️', text: '', position: 'bottom-40 left-0' },
    { emoji: '🎬', text: 'Pr', position: 'bottom-10 left-20' },
    { emoji: '💻', text: '', position: 'top-40 right-10' },
    { emoji: '📷', text: '', position: 'bottom-20 right-10' },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-2xl hover:scale-110 transition-transform shadow-lg`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                  Keshav Yadav
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-xl md:text-2xl leading-relaxed max-w-xl font-light"
              >
                Building digital experiences that blend{' '}
                <span className="text-white font-medium">creativity</span> with{' '}
                <span className="text-white font-medium">code</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 text-base mt-4 max-w-lg"
              >
                Full-stack developer & CSE graduate passionate about turning ideas into elegant, 
                user-centered solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50 flex items-center space-x-2">
                <span>📥</span>
                <span>Download CV</span>
              </button>
              <a
                href="https://wa.me/9779804803464"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-white hover:bg-primary/10 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2"
              >
                <span>✉️</span>
                <span>Contact Me</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Character Image */}
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
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
              >
                <img 
                  src="hero-keshav.png" 
                  alt="Keshav Yadav" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((icon, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className={`absolute ${icon.position} w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
              >
                {icon.emoji}
                {icon.text && (
                  <span className="absolute -bottom-1 -right-1 bg-primary text-white text-xs px-2 py-1 rounded-lg font-bold">
                    {icon.text}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
