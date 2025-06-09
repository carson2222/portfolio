# Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, smooth animations, and optimized performance.

## Features

- 🎨 Modern UI with dark/light mode
- ⚡ Next.js 14 with App Router
- 🔥 TypeScript for type safety
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🌈 Tailwind CSS with Shadcn/UI components
- 🔍 Project showcase with image galleries
- 📝 Markdown support for project descriptions
- 🎮 Interactive 3D elements
- 🔄 Smooth page transitions

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
portfolio/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...           # Feature components
├── public/            # Static assets
├── styles/           # Global styles
└── types/            # TypeScript types
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Radix UI](https://www.radix-ui.com/)

## Development

### Code Style

The project uses ESLint and Prettier for code formatting and linting. Run the following commands to check and fix code style:

```bash
# Check code style
npm run lint

# Format code
npm run format
```

### Type Checking

```bash
npm run type-check
```

## Performance Optimization

- Images are optimized using Next.js Image component
- Components are code-split automatically
- Fonts are optimized and preloaded
- CSS is minified in production
- Static pages are pre-rendered at build time

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
