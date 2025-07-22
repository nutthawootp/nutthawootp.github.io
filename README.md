# Personal Portfolio Website

This is my personal portfolio website built with modern web technologies to showcase my projects, skills, and professional experience.

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
- Project showcase
- About me section
- Contact form
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
