import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaInstagram, name: 'Instagram', color: 'from-purple-600 to-pink-500', link: 'https://www.instagram.com/adhikari_keshavraj/' },
    { icon: FaFacebookF, name: 'Facebook', color: 'from-blue-600 to-blue-700', link: 'https://www.facebook.com/keshav.yadav.946029' },
    { icon: FaLinkedinIn, name: 'LinkedIn', color: 'from-blue-500 to-blue-600', link: 'https://www.linkedin.com/in/keshavyadav9/' },
    { icon: FaGithub, name: 'GitHub', color: 'from-gray-700 to-gray-900', link: 'https://github.com/KeshavYadav289' },
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
            className="text-gray-700 dark:text-gray-400 text-sm"
          >
            <p>
              <a 
                href="https://www.oraclebrain.com.np" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-gray-900 dark:text-white hover:text-primary transition-colors duration-300"
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
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white hover:shadow-xl transition-all duration-300`}
                  style={{
                    boxShadow: '0 8px 20px -5px rgba(0,0,0,0.25), 0 3px 5px -2px rgba(0,0,0,0.1)',
                  }}
                  title={social.name}
                >
                  <IconComponent className="text-base" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
