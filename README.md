# Keshav Yadav - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark-themed UI with glassmorphism effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid page transitions
- **Interactive Components**: Hover effects, scroll animations, and interactive elements
- **Clean Code**: Well-organized component structure following React best practices

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **JavaScript (ES6+)** - Programming language

## 📦 Installation

1. Install dependencies (already done):
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📁 Project Structure

```
KeshavPortFolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with glass effect
│   │   ├── Hero.jsx         # Hero section with character
│   │   ├── About.jsx        # About Me section
│   │   ├── Skills.jsx       # Skills showcase with progress bars
│   │   ├── Projects.jsx     # Projects grid
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer component
│   │   └── ScrollToTop.jsx  # Scroll to top button
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B00',  // Orange
  secondary: '#1a1d29',
  dark: '#0f1117',
}
```

### Content
Update the content in each component file:
- Personal information in `Hero.jsx`
- Skills list in `Skills.jsx`
- Projects in `Projects.jsx`
- Contact form handler in `Contact.jsx`

## 📱 Sections

1. **Hero** - Introduction with social links and CTA buttons
2. **About Me** - Personal information with statistics
3. **Skills** - Technology proficiency with animated progress bars
4. **Projects** - Showcase of recent work
5. **Contact** - Contact form for inquiries
6. **Footer** - Copyright and social links

## 🌟 Features to Add (Optional)

- [ ] Blog section
- [ ] Dark/Light mode toggle (fully functional)
- [ ] Real project images
- [ ] Backend integration for contact form
- [ ] Testimonials section
- [ ] Download CV functionality

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Keshav Yadav**

Feel free to reach out for collaborations or opportunities!

---

Built with ❤️ using React and Tailwind CSS
