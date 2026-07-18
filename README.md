# Bappa Ayurveda – Blog Listing Page

A responsive, accessible, and reusable blog listing page built as part of the final technical assessment for the **Website Development Intern** position at **Bappa Ayurveda**.

## Live Demo

🔗 Live Site: https://bappa-ayurveda-blog-listing-page.netlify.app/

## Live Preview

![Blog Page Demo](/public/preview.gif)

---

## Overview

This project implements a premium blog listing page that reflects Bappa Ayurveda's brand identity while focusing on readability, responsive design, and reusable component architecture.

The page includes:

- Responsive navigation
- Brand hero section
- Category filter buttons
- Responsive blog grid
- Reusable blog card component
- Mobile-first design
- Accessibility best practices

---

## Tech Stack

- React
- Vite
- CSS3
- JavaScript (ES6+)

---

## Features

### Responsive Layout

- Mobile-first approach
- Optimized for mobile, tablet, and desktop
- CSS Grid for blog layout
- Flexible navigation with mobile menu

### Reusable Components

- Header
- Hero Banner
- Category Filters
- Blog Card

### Category Filtering

- Data-driven category buttons
- Client-side filtering
- Easily extendable

### Blog Cards

Each card displays:

- Featured image
- Category badge
- Article title
- Author information
- Publication date
- Short excerpt
- Call-to-action link

### Brand Consistency

Color palette provided by Bappa Ayurveda:

- Background: `#F7F3ED`
- Accent: `#B8892A`
- Primary Text: `#2C4A3E`
- Secondary Text: `#2A2A2A`

Typography:

- **Cormorant Garamond** for headings
- **DM Sans** (or system fallback) for body text

---

## Project Structure

```
src/
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── CategoryFilters/
│   └── BlogCard/
│
├── data/
│   ├── blogPosts.js
│   └── categories.js
│
├── App.jsx
└── main.jsx
```

---

## Design Decisions

### Reusable Components

Each UI section is isolated into its own component to improve readability, maintainability, and future scalability.

---

### Separate Data Layer

Blog content is stored separately from UI components.

Benefits:

- No hardcoded JSX
- Easier content updates
- Supports future API integration
- Cleaner component logic

---

### CSS Grid

CSS Grid was chosen for the blog layout because it provides predictable responsive columns while keeping card spacing consistent.

---

### Mobile-First Development

The interface was designed starting from smaller screens before progressively enhancing tablet and desktop layouts.

---

### Semantic HTML

The project uses semantic elements where appropriate:

- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<time>`

This improves accessibility and SEO.

---

## Accessibility

Implemented accessibility considerations include:

- Semantic HTML structure
- Meaningful image alt text
- Decorative images hidden from screen readers
- Keyboard-accessible navigation
- Visible focus states
- Responsive touch targets
- Proper ARIA attributes for mobile navigation

---

## Responsive Breakpoints

| Device  | Width   |
| ------- | ------- |
| Mobile  | <768px  |
| Tablet  | ≥768px  |
| Desktop | ≥1024px |

---

## Future Improvements

If this project were extended further, I would implement:

- Functional category filtering with URL parameters
- Individual blog article pages
- Search functionality
- Dark mode
- Pagination
- Backend/API integration
- Animations using Framer Motion
- Unit tests

---

## Installation

Clone the repository:

```bash
git clone https://github.com/anik-hindu/blog-listing-page.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Reflection

This project challenged me to think beyond building individual components and instead focus on creating a cohesive, responsive interface with reusable architecture. Throughout the implementation, I prioritized maintainability, accessibility, and clean component separation while staying aligned with Bappa Ayurveda's brand identity.

The project also helped me strengthen my understanding of responsive layouts, component composition, state management, and designing systems that are easier to extend in future iterations.
