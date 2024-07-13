# NewYorkTimes Blogs App

![Project Image](./public/vite.svg)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Tests](#tests)
- [Project-Structure](#project-structure)

## Description

This project is a React-based blogs App that fetches blogs data from New York Times blogs api and render a list of blogs. on clicking any blog item it opens a detailed section of that blog.

## Features

- List of Blogs.
- Single blog detail
- Unit tests by RTL.
- UI tests in cypress.
- Linting and pre-commit hooks.

## Installation

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/zaman95/ny-blogs.git

# Navigate to the project directory
cd ny-blogs

# Install dependencies
npm install

# Run the development server
npm run dev

# make a build
npm run build

# lint commands
npm run lint #to check error
npm run lint:fix #to fix lint error
```

## Tests

```bash
# Run unit test tests
npm test

# Run tests by cypress
npm run cypress
```

## Project Structure
```bash
ny-blogs/
│
├── public/
│   ├── vite.svg
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── react.svg
│   │   └── ...
│   │
│   ├── components/
|   |   |── BlogDetail/
│   |   |    ├── BlogDetail.test.tsx
│   |   |    ├── index.tsx
|   |   |── Blogs/
│   |   |    ├── Blogs.test.tsx
│   |   |    ├── index.tsx
│   │   └── ...
│   │
│   ├── services/
│   │   ├── index.ts
│   │   └── ...
│   │
│   ├── types/
│   │   ├── BlogsListing.type.ts
│   │   └── ...
|   |
│   ├── styles/
│   │   ├── global.css
│   │   └── ...
|   |
│   |── pages/
|   |   |── BlogsListing/
│   |   |    ├── BlogsListing.test.tsx
│   │   |    └── FoodListing.tsx
│   │   └── ...
|   |
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.tsx
│   └── ...
│
│
├── README.md
├── package.json
└── ...
```