# Contributing to RegainFlow

Welcome to the RegainFlow project! We're building a high-performance HCM Interoperability Platform. This document provides guidelines for contributing to the project.

## Architecture

We follow the [Bulletproof React](https://github.com/alan2207/bulletproof-react) architecture to ensure scalability and maintainability.

### Directory Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Shared components (Layout, UI elements)
├── config/          # App configuration (constants, env vars)
├── features/        # Feature-based modules
│   ├── dashboard/   # Dashboard feature
│   ├── pipeline/    # Pipeline feature
│   ├── validation/  # Validation feature
│   └── settings/    # Settings feature
├── hooks/           # Shared hooks
├── lib/             # Re-exporting libraries
├── providers/       # App providers (Router, Theme)
├── routes/          # Route definitions
├── stores/          # State management
├── types/           # Shared types
└── utils/           # Shared utilities
```

### Feature Module Structure

Each feature folder should contain:

```
features/awesome-feature/
├── components/      # Components scoped to this feature
├── hooks/           # Hooks scoped to this feature
├── routes/          # Routes for this feature
├── types/           # Types for this feature
└── index.ts         # Entry point for the feature
```

## Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables (Glassmorphism)
- **Icons**: React Icons (Phosphor Duotone)
- **Routing**: React Router DOM

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:3000`.

## Styling Guidelines

Refer to [STYLES.md](./STYLES.md) for the complete design system documentation, including:
- Color Palette (Neon Cyan & Dark Mode)
- Glass Morphism Effects
- Typography
- Component Patterns

## Development Workflow

1.  **Create Feature**: If adding a new domain, create a folder in `src/features`.
2.  **Add Components**: Place components in `src/components` (if shared) or `src/features/*/components` (if scoped).
3.  **Update Routes**: Add new routes in `src/routes/index.tsx`.
4.  **Verify**: Ensure your changes match the design system and pass linting.

---

Happy Coding! 🚀
