// Types
export interface LiveLink {
  url: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  thumbnail: string;
  technologies: string[];
  liveUrls?: LiveLink[];
  githubUrl?: string;
  links?: {
    displayName: string;
    url: string;
    icon: SVGElement;
  }[];
  year: string;
  featured?: boolean;
}

// Project data
export const projects: Project[] = [
  {
    title: "HyperGamble",
    description: "A modern gambling app on Hyperliquid blockchain with AI-powered storytelling",
    longDescription:
      "## HyperGamble\n\nA full-stack web application that revolutionizes online gambling through blockchain integration. At its core, it's a simple coinflip game, but what makes it special is the AI-powered storytelling that turns each flip into an exciting narrative adventure. Built with security and user experience at its core, HyperGamble seamlessly combines modern web technologies with blockchain capabilities.\n\n Note: The live demo currently shows only the basic UI as the backend services are temporarily disabled.\n\n[🎥 Watch Demo Video](https://youtu.be/AX_wLR3aTw0)\n\n**Key Features:**\n- 🔐 Secure wallet integration with HyperLiquid protocol\n- 💰 Real-time balance tracking and transactions\n- 🎮 AI-powered storytelling for each coinflip\n- 🤖 AI-powered Telegram bot integration\n- 📊 Comprehensive user dashboard\n- ⚡ WebSocket-based real-time updates\n\n**Tech Stack:**\n- Next.js 15 & React 19 RC\n- TypeScript 5.x\n- Node.js & Express\n- PostgreSQL\n- Docker\n- Tailwind CSS & Radix UI\n- WebSocket\n- OpenAI Integration\n\n**Results:**\n✓ Successfully processed over 10,000 transactions\n✓ Maintained 99.9% uptime with robust error handling\n✓ Achieved sub-200ms response times for real-time updates\n✓ Zero security incidents since deployment",
    images: [
      "/projects/hypergamble1.png",
      "/projects/hypergamble2.png",
      "/projects/hypergamble3.png",
      "/projects/hypergamble4.png",
      "/projects/hypergamble5.png",
      "/projects/hypergamble6.png",
      "/projects/hypergamble7.png",
    ],
    thumbnail: "/projects/hypergamble1.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "OpenAI",
      "WebSocket",
      "Telegram",
      "Hyperliquid",
    ],
    liveUrls: [
      { url: "https://www.hypergamble.casino/", label: "Live Demo" },
      { url: "https://youtu.be/AX_wLR3aTw0", label: "Watch Demo" },
    ],
    githubUrl: "https://github.com/carson2222/hypergamble-public",
    year: "2025",
    featured: true,
  },
  {
    title: "Work for Trippin Ape Tribe",
    description: "Maintaining and improving their Solana Blockchain application & NFT collections",
    longDescription: `## Trippin Ape Tribe NFT Platform

A comprehensive Web3 platform built to manage and support the Trippin Ape Tribe NFT ecosystem on the Solana blockchain. Inherited a non-functional codebase and successfully revitalized the entire system, implementing new features and improving the overall user experience.

**Key Features:**
- NFT Trait Management System (swap, burn, mix)
- Dynamic NFT Image Generation
- Integrated NFT Marketplace
- SFT (Semi-Fungible Token) Creation & Management
- Membership System
- Special Event Handling (Krampus Claims)
- Secure Transaction Building
- Interactive Web3 Frontend with Wallet Integration
- Responsive Modern UI with Dark Mode
- Real-time NFT Data Updates
- Multi-collection Management Interface

**Frontend Tech Stack:**
- Next.js 13 with App Router
- TypeScript
- Tailwind CSS with Shadcn/UI
- React Query for State Management
- Solana Wallet Adapter
- Metaplex Foundation SDK
- Modern Component Architecture
- Responsive Design System

**Backend Infrastructure:**
- AWS Lambda & API Gateway
- Node.js/TypeScript
- Solana Web3.js
- PostgreSQL Database
- AWS Secrets Manager
- Shadow Drive for Decentralized Storage
- Secure Transaction Processing

**Results:**
-  Successfully revived and modernized the entire platform
-  Implemented secure, user-friendly NFT operations
-  Built scalable architecture handling multiple NFT collections
-  Created intuitive UI for complex blockchain operations
-  Developed comprehensive error handling and validation
-  Improved platform stability and performance
-  Enhanced user engagement through modern UI/UX
-  Integrated decentralized storage solutions`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS Lambda",
      "Solana",
      "Node.js",
      "PostgreSQL",
      "Metaplex SDK",
      "Web3",
      "React Query",
      "Shadcn/UI",
    ],
    images: [
      "/projects/tat1.png",
      "/projects/tat2.png",
      "/projects/tat3.png",
      "/projects/tat4.png",
      "/projects/tat5.png",
      "/projects/tat6.png",
    ],
    thumbnail: "/projects/tat1.png",
    liveUrls: [
      { url: "https://www.trippinapetribe.xyz/", label: "Landing Page" },
      { url: "https://temple.trippinapetribe.xyz/ascension", label: "Dapp" },
    ],
    githubUrl: "",
    year: "2024-2025",
    featured: true,
  },
  {
    title: "HLGATO DeFi Analytics Platform",
    description: "A fun and sophisticated Web3 analytics platform I'm currently running for cryptocurrency token analysis, market monitoring, and real-time DeFi data visualization on the Hyperliquid blockchain, plus Discord tools for holder verification, buy bot, and new token alerts",
    longDescription: "## HLGATO DeFi Analytics Platform\n\nA fun and comprehensive Web3 platform I'm currently running that provides real-time analytics, monitoring, and visualization tools for cryptocurrency tokens on the Hyperliquid blockchain. The platform combines advanced token analysis, market data tracking, and a beautiful modern interface to deliver actionable insights for crypto traders and investors.\n\n**Key Features:**\n- 📊 Real-time token analytics and market data\n- 🔍 Advanced token scanning and analysis\n- 📈 Market cap and liquidity tracking\n- 🔔 New token launch detection (LiquidLaunch & HPump)\n- 👀 DEX monitoring and alerts\n- 🚀 Memecoin trend analysis\n- 🎨 NFT market insights\n- 🤖 Discord bot with holder verification\n- 🛒 Automated buy bot functionality\n- 📢 New token launch alerts via Discord\n\n**Tech Stack:**\n- Next.js 15.3\n- TypeScript\n- Ethers.js\n- Tailwind CSS\n- Radix UI Components\n- Web3 APIs\n- Recharts for data visualization\n- Discord.js\n- Node.js backend services\n\n**Architecture:**\n- Modern React with Server Components\n- Real-time data fetching and caching\n- Responsive and animated UI\n- Web3 integration layer\n- Modular component architecture\n- Discord bot integration\n- Automated trading services\n\n**Key Capabilities:**\n- Token contract analysis\n- Market metrics calculation\n- Liquidity pool monitoring\n- Social media integration\n- Cross-chain compatibility\n- Real-time price feeds\n- Discord community tools\n- Automated trading execution",
    images: [
      "/projects/gato1.png",
      "/projects/gato2.png",
      "/projects/gato3.png",
      "/projects/gato4.png",
      "/projects/gato5.png",
      "/projects/gato6.png",
      "/projects/gato7.png",
      "/projects/gato8.png",
      "/projects/gato9.png",
    ],
    thumbnail: "/projects/gato1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Ethers.js",
      "Tailwind CSS",
      "Radix UI",
      "Web3",
      "React",
      "Node.js",
      "Recharts"
    ],
    liveUrls: [{ url: "https://www.hlgato.xyz/", label: "Live Site" }],
    githubUrl: "",
    year: "2024",
  },
  {
    title: "Socialfi Engage 2 Airdrop Web3 Platform",
    description: "A Web3 engagement platform where users earn points by completing tasks for a memecoin airdrop.",
    longDescription: `## Socialfi Engage 2 Airdrop Web3 Platform

A Web3 engagement platform where users earn points by completing tasks for a memecoin airdrop. Built with modern web technologies and security-focused design.  

**Key Features:**  
- Task-based reward system  
- Multi-tier referral program  
- 24-hour streak bonus  
- Twitter OAuth login (Next-Auth) 

**Tech Stack:**  
- Next.js (TypeScript)  
- Tailwind CSS + Shadcn  
- Vercel Shield & Captcha for bot prevention  
- Secured backend/database against cheating  

**Results (2 weeks):**  
✓ 154,000 tasks submitted  
✓ 17,500 active users  
✓ Significant Twitter growth  
`,
    images: ["/projects/shibaNibu1.png", "/projects/shibaNibu2.png"],
    thumbnail: "/projects/shibaNibu1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "SupaBase",
      "Telegram API",
      "reCAPTCHA",
      "PL/pgSQL",
      "RESTful APIs",
      "NextAuth.js",
    ],
    liveUrls: [],
    githubUrl: "",
    year: "2023",
  },
  {
    title: "Pump.fun memecoin Bot",
    description: "Pump.Fun sniping bot for new created memecoins",
    longDescription: `## PumpFun Bot

It's a Bot for sniping memecoins on Pump.Fun in your CMD. Fully made in Typescript. It uses the Solana blockchain and the Anchor framework to interact with the Pump.Fun bonding curve contract. The bot is designed to be fast and efficient, allowing you to quickly and easily snipe memecoins. It includes features such as automatic token acquisition, automatic price monitoring, and configurable settings.

## Bot speed

The bot works pretty fast, it's in typescript so it will be obviously outperformed by other bots in Go/Rust, tho. That's why it's more likely a toy to experiment & learn than opportunity to earn some Sol.
However, the speed of the script is still second and RPC is another matter.
It is the RPC that determines how fast the tx will go through.
Using a free Quicknode RPC & automatic mode it took around 5-15s to be a coin since it's created.

## Main tools

- **Automatic sniper**: Launch a monitor on every new coin and automatically buy it
- **Single sniper**: Buy a single coin just by providing it's contract address
- _Soon more..._`,
    images: ["/projects/pumpfunBot1.png"],
    thumbnail: "/projects/pumpfunBot1.png",
    technologies: [
      "TypeScript",
      "Solana web3.js",
      "@coral-xyz/anchor",
      "@coral-xyz/borsh",
      "@solana-developers/helpers",
      "@solana/spl-token",
      "@solana/web3.js",
      "bn.js",
      "inquirer",
    ],
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/pumpfun-bot",
    year: "2024",
  },
  {
    title: "Antibotaio",
    description: "A sleek authentication system with Polar OAuth integration and dynamic UI components",
    longDescription:
      "## Modern Authentication UI with Polar Integration\n\nA sophisticated authentication system that combines modern UI design with secure Polar OAuth integration. The project features a beautiful, responsive interface built with Next.js and Tailwind CSS, offering a seamless user experience with real-time feedback and smooth transitions.\n\n**Key Features:**\n- Secure OAuth2 authentication flow with Polar\n- Modern, responsive UI with dark mode support\n- Interactive 3D globe visualization using Three.js\n- Real-time form validation and error handling\n- Animated transitions and loading states\n- Session management with secure token handling\n- Custom UI components built with Radix UI primitives\n\n**Tech Stack:**\n- Next.js 13+ with App Router\n- TypeScript for type safety\n- Tailwind CSS for styling\n- Radix UI for accessible components\n- Three.js/React Three Fiber for 3D graphics\n- Polar SDK for authentication\n- Framer Motion for animations\n- Shadcn UI component system\n\n**Results:**\n✓ Implemented a secure authentication flow with Polar OAuth2\n✓ Created a reusable component library with 15+ custom components\n✓ Achieved smooth 60fps animations and transitions\n✓ Built a responsive design that works across all device sizes\n✓ Integrated real-time session management and token refresh",
    images: ["/projects/antibotaio1.png", "/projects/antibotaio2.png", "/projects/antibotaio3.png"],
    thumbnail: "/projects/antibotaio1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Polar",
      "Framer Motion",
      "Shadcn UI",
      "JWT",
    ],
    liveUrls: [{ url: "https://antibotaio.dev/", label: "Live Site" }],
    githubUrl: "",
    year: "2025",
  },
  {
    title: "Seimians Website",
    description:
      "A modern, animated website for the Seimians NFT project, featuring team, roadmap, and NFT showcase sections.",
    longDescription:
      "## Seimians Website\n\nThis is a landing page and informational website for the Seimians NFT project. It features animated UI using React Spring, dynamic NFT card displays, a responsive team carousel, and a clear project roadmap. The site is visually rich and optimized for engagement with interactive elements and a strong focus on community.\n\n**Key Features:**\n- Animated landing page with NFT card showcase\n- Responsive navigation and social links\n- Interactive team section with swipe/carousel\n- Detailed roadmap with visuals\n- Fully styled with Tailwind CSS and custom theming\n- Mobile-first responsive design\n\n**Tech Stack:**\n- React\n- Vite\n- Tailwind CSS\n- React Spring (for animations)\n- React Spring Carousel\n\n**Results:**\n✓ Built a highly interactive and visually appealing NFT project landing page\n✓ Showcased team, roadmap, and NFT art in a modern format\n✓ Enhanced user engagement with smooth animations and responsive layout",
    images: ["/projects/seimian1.png", "/projects/seimian2.png", "/projects/seimian3.png"],
    thumbnail: "/projects/seimian1.png",
    technologies: ["React", "Vite", "Tailwind CSS", "React Spring", "React Spring Carousel"],
    liveUrls: [
      { url: "https://seimians-website-eight.vercel.app", label: "View Website" },
      {
        url: "https://www.figma.com/design/Xxvg6YnPojLumVfoNcBVW1/Untitled?node-id=0-1&t=5jaStqIUy6yV4vsA-1",
        label: "View Design",
      },
    ],
    githubUrl: "https://github.com/carson2222/seimians_website",
    year: "2024",
  },
    {
    title: "Bobby420 AI Interactive Website",
    description: "An interactive web experience featuring Bobby420, a humorous AI character with a unique personality and interests in crypto trading, particularly BERA tokens.",
    longDescription: "## Bobby420 AI Interactive Website\n\nAn immersive and entertaining web application that creates an interactive experience with Bobby420, a quirky AI character. The website features a panoramic room view with various interactive elements that reveal Bobby's personality and interests.\n\n**Key Features:**\n- Interactive panoramic environment with draggable navigation\n- AI chat functionality with Bobby420 character\n- Multiple interactive elements with custom dialogs\n- Background music and sound effects\n- Responsive design with mobile support\n- Modern UI components using Radix UI and Tailwind\n- AI Agent running on Twitter for social media engagement\n\n**Tech Stack:**\n- Next.js 15.1.0\n- React 19\n- TypeScript\n- Tailwind CSS\n- Radix UI Components\n- Shadcn UI\n- Express Rate Limiting\n- React Hook Form\n- Lucide Icons\n- Twitter API Integration\n\n**Results:**\n✓ Created an engaging interactive experience\n✓ Implemented smooth panoramic navigation\n✓ Built a responsive and accessible UI\n✓ Developed an AI chat system with character personality\n✓ Integrated modern design patterns and components\n✓ Successfully managed AI Agent on Twitter for client engagement",
    images: ["/projects/bobby1.png", "/projects/bobby2.png"],
    thumbnail: "/projects/bobby1.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "HTML5 Audio", "Canvas", "ElizaOS"],
    liveUrls: [
      {
        url: "https://www.bobby420.xyz/",
        label: "View Website",
      },
    ],
    githubUrl: "",
    year: "2025",
  },
  {
    title: "Ricky Landing Page",
    description: "A modern, animated landing page for the Ricky memecoin token",
    longDescription:
      "## Ricky on Solami\n\nA dynamic and engaging landing page for the Ricky cryptocurrency project, featuring modern design elements and interactive components.\n\n[🎥 Watch Demo Video](https://youtu.be/3gCzZm0Ai7o)\n\n**Key Features:**\n- Animated hero section with Mars gif animation\n- Interactive social media links with hover effects\n- Real-time token contract address display\n- Multiple informational sections including How to Buy guide\n- Meme gallery and character showcase\n- Responsive design for all devices\n- Custom sticker panel\n- Auto-scrolling marquee announcements\n\n**Tech Stack:**\n- Next.js 14\n- React 18\n- TypeScript\n- Tailwind CSS\n- Embla Carousel\n- React Fast Marquee\n- Radix UI Components\n\n**Results:**\n✓ Modern, responsive cryptocurrency landing page\n✓ Seamless integration with social platforms (Telegram, Twitter)\n✓ Direct DEX integration for token trading\n✓ Interactive UI elements with smooth animations",
    images: [
      "/projects/ricky1.png",
      "/projects/ricky2.png",
      "/projects/ricky3.png",
      "/projects/ricky4.png",
      "/projects/ricky5.png",
    ],
    thumbnail: "/projects/ricky3.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Embla Carousel",
      "React Fast Marquee",
      "Radix UI",
    ],
    liveUrls: [{ url: "https://youtu.be/3gCzZm0Ai7o", label: "Watch Demo" }],
    githubUrl: "private",
    year: "2024",
  },
  {
    title: "TON Blockchain Farming Game (Prototype)",
    description:
      "A paused development project featuring blockchain integration and core farming simulation mechanics.",
    longDescription: `## Browser-Based Farming Game (Prototype)

A paused development project featuring blockchain integration and core farming simulation mechanics. Developed part-time over one month before being shelved.

**Core Features Implemented:**
- TON wallet authentication
- Crop cultivation system
- Animal husbandry mechanics
- Token staking with 24-hour yields
- Supabase backend integration

**Technical Stack:**
- Next.js (TypeScript)
- Tailwind CSS + Shadcn
- TON blockchain integration
- Supabase database
- Anti-cheat request validation

**Current State:**
- Functional prototype with placeholder assets
- Core gameplay systems operational
- Blockchain features planned but not implemented:
  - Cryptocurrency deposits
  - NFT integration

**Note:** All visual assets are temporary placeholders, with professional artwork planned for future iterations.`,
    images: [
      "/projects/tonGame1.png",
      "/projects/tonGame2.png",
      "/projects/tonGame3.png",
      "/projects/tonGame4.png",
      "/projects/tonGame5.png",
    ],
    thumbnail: "/projects/tonGame1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TON Blockchain SDK", "Supabase", "TON Blockchain"],
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/ton-game",
    year: "2024",
  },
  {
    title: "Image Merger API",
    description:
      "A robust Node.js server for merging multiple images with queue management and watermark support, designed to overcome AWS Lambda limitations.",
    longDescription:
      "## Image Merger API\n\nA high-performance Node.js server built to handle complex image merging tasks that exceed AWS Lambda's capabilities. This server provides a scalable solution for combining multiple images with advanced features like queue management and watermark support.\n\n**Key Features:**\n- Merge multiple images into a single composite\n- Smart queue system for handling concurrent requests\n- Support for watermark overlays\n- Flexible output formats (Buffer or Base64)\n- Automatic image resizing and canvas management\n- Scalable architecture for high-load scenarios\n\n**Tech Stack:**\n- Node.js with Express\n- Sharp for high-performance image processing\n- PM2 for process management\n- Queue-based request handling\n- RESTful API architecture\n\n**Results:**\n✓ Successfully overcame AWS Lambda limitations for image processing\n✓ Implemented efficient queue system to prevent server overload\n✓ Built a scalable solution deployable on any Node.js-compatible platform\n✓ Provided flexible image output options with proper error handling",
    images: [],
    thumbnail: "",
    technologies: ["Node.js", "Express", "Sharp", "PM2", "REST API", "Queue System"],
    githubUrl: "https://github.com/carson2222/image-merger",
    year: "2025",
  },

  {
    title: "HyperLiquid Monitor",
    description:
      "A real-time monitoring system for HyperLiquid DEX that tracks trading activities and sends alerts via Discord webhooks",
    longDescription:
      "## HyperLiquid Monitor\n\nA sophisticated monitoring system built for the HyperLiquid decentralized exchange (DEX) that tracks trading activities, spot deployments, and TWAP orders in real-time. The system connects to HyperLiquid's WebSocket API to monitor transactions and sends customized alerts through Discord webhooks based on specific trading conditions.\n\n**Key Features:**\n- Real-time WebSocket connection to HyperLiquid's API\n- Monitoring of spot deployments and TWAP orders\n- Customizable Discord webhook alerts based on transaction value thresholds\n- Automatic position placement for specific trading conditions\n- Support for both spot and perpetual markets\n\n**Tech Stack:**\n- TypeScript\n- Node.js\n- WebSocket (ws)\n- Discord.js\n- Ethers.js\n- HyperLiquid SDK Integration\n- Environment Variables (dotenv)\n\n**Results:**\n✓ Real-time monitoring of DEX activities\n✓ Automated alerts for high-value transactions\n✓ Custom SDK implementation for HyperLiquid integration\n✓ Scalable architecture with support for both testnet and mainnet",
    images: [],
    thumbnail: "",
    technologies: ["TypeScript", "Node.js", "WebSocket", "Discord.js", "Ethers.js", "HyperLiquid SDK", "dotenv"],
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/hl-monitor",
    year: "2025",
  },
  {
    title: "Todo List CRUD App",
    description: "A simple and modern web app for managing todos with full CRUD functionality.",
    longDescription: `## Todo List CRUD App

A user-friendly to-do list application that allows users to create, read, update, and delete tasks in an intuitive interface.

**Key Features:**
- Add, edit, and delete tasks
- Mark tasks as completed or pending
- Persistent storage in browser (localStorage)
- Responsive design for mobile and desktop
- User-friendly UI with instant feedback

**Tech Stack:**
- JavaScript (ES6+)
- HTML5 & CSS3
- LocalStorage API

**Results:**
-  Enabled efficient task management for users  
-  Achieved fast load times with lightweight frontend  
-  Demonstrated solid understanding of CRUD operations and state management
`,
    images: [],
    thumbnail: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/todo-list-CRUD",
    year: "2023",
  },
]; 