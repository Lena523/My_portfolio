- # 💻 my-portfolio

  A professional, high-performance portfolio application built with **React 19**, **TypeScript 5**, and **Vite 8**, featuring a robust testing suite and automated code quality workflows.

  ***

  ## ✨ Features

  ### 🚀 Automated CI/CD Pipeline
  - **GitHub Actions**: Full automation of code checks on every push.
  - **Node.js 25**: Using the latest "Current" runtime environment.
  - **Continuous Integration**: Automated Vitest execution and project building.
  - **Continuous Deployment**: Automatic deployment to **Netlify** from the `main` branch after successful tests.

  ### 🎨 Modern Styling with Emotion
  - **Styled Components** via `@emotion/styled` for modular, reusable UI.
  - **Dynamic CSS-in-JS** with `@emotion/react` for flexible styling.
  - **Optimized Performance** using the modern React 19 JSX runtime.

  ### 🚦 Navigation & Routing
  - **React Router 7** for seamless Single Page Application (SPA) transitions.
  - **Declarative Routing** with strict TypeScript integration.

  ### 🧪 Comprehensive Testing Setup
  - **Vitest 4** for lightning-fast unit and integration testing.
  - **React Testing Library** for user-centric component validation.
  - **JSDOM 28** environment for accurate browser API simulation.

  ### 🧹 Code Quality & DX
  - **ESLint 9** (Flat Config) with TypeScript-specific rules for clean code.
  - **Prettier 3.8** for automated, consistent formatting across the project.
  - **Husky 9** for pre-commit and pre-push automation hooks.
  - **lint-staged 16** to automatically fix and format staged files.

  ***

  ## 🛠 Installation & Usage

  To set up the project locally, run the following commands:

  ```bash
  # Clone the repository
  git clone https://github.com

  # Navigate to the folder and install dependencies
  cd my-portfolio
  npm install

  # Start development server
  npm run dev

  # Run tests (Vitest)
  npm test

  # Build for production (creates dist folder)
  npm run build
  ```
