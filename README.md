# Biraj's Portfolio

A modern, responsive personal portfolio website showcasing my projects, skills, and professional experience as a web developer.

![Portfolio Preview](/public/preview.svg)

## 🌟 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between themes with a smooth transition
- **Interactive UI**: Smooth scrolling, animations, and hover effects
- **Project Showcase**: Featured projects with descriptions and live links
- **Skills Section**: Visual representation of technical skills
- **Modern Design**: Clean, professional aesthetic with a focus on user experience

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautifully crafted open-source icons
- **CSS Custom Properties**: For theming and consistent design language
- **Responsive Design**: Fluid layouts that work on any device

## 📋 Project Structure

```
├── public/             # Static assets and favicon
│   └── projects/       # Project images
├── src/
│   ├── components/     # React components
│   │   ├── AboutSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── lib/            # Utility functions
│   ├── Pages/          # Page components
│   ├── assets/         # Assets used in components
│   ├── App.jsx         # Main App component
│   ├── index.css       # Global styles and utilities
│   └── main.jsx        # Entry point
└── index.html          # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/B-Das/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🔧 Customization

To customize this portfolio for your own use:

1. Update the project data in `src/components/ProjectsSection.jsx`
2. Modify skills in `src/components/SkillsSection.jsx`
3. Edit personal information in `src/components/AboutSection.jsx`
4. Replace images in the `public/projects/` directory
5. Update contact information and links

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: < 640px
- Small: 640px
- Medium: 768px
- Large: 1024px
- Extra Large: 1280px

## 🎨 Theme Customization

The site uses CSS custom properties for theming. You can modify the color scheme in `src/index.css`:

```css
:root {
  --background: 210 40% 96.1%;
  --foreground: 222 47% 11.2%;
  --primary: 221.2 83.2% 53.3%;
  /* Additional theme variables */
}
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

Biraj Das - [GitHub](https://github.com/B-Das) - [LinkedIn](https://linkedin.com/in/yourusername)

---

Designed and developed with ❤️ by Biraj Das
