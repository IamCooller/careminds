## Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Language:** TypeScript
- **Package Manager:** pnpm

## Project Structure

The project follows a modular and scalable architecture with clear separation of concerns. Here's a detailed breakdown of the directory structure:

```
src/
├── app/                    # Next.js app directory (pages and layouts)
│   └── [page]/
│       ├── _components/    # Page-specific components
│       │   ├── sections/   # Unique sections for this page
│       │   ├── ui/        # UI elements specific to page sections
│       ├── _images/   # Page-specific images
│       └── page.tsx       # Page component
├── components/            # Shared components
│   ├── ui/               # Global UI components and shadcn components
│   └── sections/         # Reusable sections across multiple pages
├── data/                 # Test data and mock content
├── lib/                  # Utility functions and helper files
├── services/            # Server actions and data fetching
│   └── [feature]/       # Feature-specific server actions
├── styles/              # Global styles and fonts
└── types/               # TypeScript type definitions
```

## Architecture Overview

### Component Organization

The project implements a sophisticated component organization strategy:

1. **Page-Specific Components** (`_components/`)
   - Located within each page directory
   - Contains unique sections and UI elements specific to that page
   - Follows the pattern: `app/[page]/_components/`

2. **Shared Components** (`components/`)
   - **Global UI Components** (`components/ui/`)
     - Contains reusable UI components used across the entire application
     - Includes shadcn/ui components and custom UI elements
     - Provides consistent UI patterns and design system implementation
   - **Shared Sections** (`components/sections/`)
     - Reusable sections across multiple pages
     - Particularly useful for common sections like headers, footers, or shared UI patterns

### Data Management

- **Test Data** (`data/`)
  - Contains mock data and test content
  - Organized by feature or domain
  - Used for development and testing purposes

- **Services** (`services/`)
  - Implements server-side logic using Next.js server actions
  - Handles data fetching and mutations
  - Organized by feature domain

### Type Safety

- **Types** (`types/`)
  - Centralized TypeScript type definitions
  - Ensures type safety across the application
  - Includes interfaces, types, and enums

### Styling

- **Styles** (`styles/`)
  - Global styles and theme configuration
  - Font definitions and custom CSS
  - Tailwind CSS configuration and custom utilities

## Best Practices

1. **Component Isolation**
   - Page-specific components are isolated in their respective directories
   - Shared components are centralized for reusability

2. **Type Safety**
   - Comprehensive TypeScript implementation
   - Strong typing for all components and functions

3. **Server-Side Logic**
   - Clean separation of server and client-side code
   - Organized server actions in the services directory

4. **Styling**
   - Consistent use of Tailwind CSS
   - Integration with shadcn/ui for component consistency
   - Custom utilities and theme configuration

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```

## Contributing

Please follow the established project structure and coding conventions when contributing to this project. Ensure all new components are properly typed and documented.

