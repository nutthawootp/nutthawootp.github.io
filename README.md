# Personal Portfolio Website

## 🌟 Project Overview

This project is a personal portfolio website designed to showcase my skills, projects, and professional experience. Built with modern web technologies, it emphasizes performance, accessibility, and responsive design to provide an optimal user experience across various devices.

## 🛠 Technologies Used

- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Vitest** - Unit testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting

## 🚀 Features

- Responsive design
- Project showcase with featured projects
- About me section
- Enhanced contact form with validation, placeholders, and character counter
- Skills showcase
- Back to top functionality

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

## 📦 Project Structure

``` bash
src/
├── components/
│   ├── common/       # Shared components (Header, Footer)
│   ├── sections/     # Main page sections (Hero, About, Projects)
│   └── ui/          # UI components (ContactForm, ProjectCard)
├── data/            # Static data and TypeScript types
├── hooks/           # Custom React hooks (useScrollSpy)
├── styles/          # Global styles and animations
├── test/           # Component test files
└── utils/           # Utility functions and constants
```

## 🏃‍♂️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/nutthawootp/nutthawootp.github.io.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm test` - Run unit tests
- `npm run coverage` - Run tests with coverage report

## 🧪 Testing

The project includes comprehensive unit tests for all components using Vitest and React Testing Library. Tests cover:

- Component rendering
- User interactions
- Responsive behavior
- Form validation
- Navigation functionality
- Scroll behaviors

To run the test suite:

```bash
# Run tests in watch mode
npm test

# Run tests with coverage report
npm run coverage
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

We welcome contributions to this project! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 🐛 Reporting Issues

If you find any bugs or have feature requests, please open an issue using our [Issue Templates](.github/ISSUE_TEMPLATE/).
