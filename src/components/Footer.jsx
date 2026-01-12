import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '🌐', name: 'Website', link: '#' },
    { icon: '💼', name: 'LinkedIn', link: '#' },
    { icon: '⚡', name: 'GitHub', link: '#' },
    { icon: '🎨', name: 'Dribbble', link: '#' },
  ];

  return (
    <footer className="py-8 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p>
              <a 
                href="https://www.oraclebrain.com.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-primary transition-colors duration-300"
              >
                Oracle Brain
              </a> © {currentYear} All Rights Reserved
            </p>
            <p className="text-xs mt-1">
              Designed & Built by <span className="text-primary">Keshav Yadav</span>
            </p>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl hover:bg-primary/20 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
