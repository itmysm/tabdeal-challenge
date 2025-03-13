# Tabdeal Marvel Challenge

**A Nuxt 3 and Vue 3 project showcasing Marvel characters, comics, and series using the Marvel API.**

This project is a coding challenge for **Tabdeal Exchange Company**. It’s a web application built with modern frontend technologies, featuring a responsive UI to explore Marvel characters, their comics, and series. Deployed on Netlify, it leverages the Marvel API to fetch and display dynamic data.

**[Live Demo](https://tabdeal.netlify.app)**

---

## Features

- **Character Exploration**: Browse a list of Marvel characters with search and pagination functionality.
- **Comics & Series**: View detailed information about each character’s comics and series.
- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience.
- **Optimized Images**: Uses Nuxt Image module for efficient image loading (optional static image support).
- **Marvel API Integration**: Fetches real-time data from the official Marvel API.

---

## Tech Stack

- **Framework**: Nuxt 3 (Vue 3)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: [Marvel Developer API](https://developer.marvel.com/)
- **Deployment**: Netlify
- **Modules**: `@nuxt/image` for image optimization
- **Tools**: Vite, ESLint, Prettier

---

## Project Structure

```
├── nuxt.config.ts         # Nuxt configuration
├── public/                # Static files (e.g., favicon)
│   ├── images/
│   └── robots.txt
├── src/                   # Source directory
│   ├── assets/            # Images and CSS
│   │   ├── css/
│   │   └── images/
│   ├── components/        # Reusable Vue components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Application routes
│   ├── server/            # Server-side API routes
│   ├── types/             # TypeScript definitions
│   └── utils/             # Utility functions
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration
```

---

## Prerequisites

Before running the project locally, ensure you have:

- **Node.js**: v18 or higher
- **npm**: v9 or higher (or use `pnpm`/`yarn` if preferred)
- **Marvel API Key**: Sign up at [developer.marvel.com](https://developer.marvel.com/) to get your public and private keys.

---

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/itmysm/tabdeal-challenge.git
   cd tabdeal-challenge
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add your Marvel API keys and base URL:
   ```
   BASE_URL=https://tabdeal.netlify.app
   MARVEL_PUBLIC_KEY=your-public-key
   MARVEL_PRIVATE_KEY=your-private-key
   ```

4. **Run Locally**  
   Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**  
   Generate a production-ready build:
   ```bash
   npm run build
   npm run preview
   ```

---

## Credits

- **Marvel API**: Data provided by [Marvel Developer Portal](https://developer.marvel.com/).
- **Tabdeal Exchange Company**: This project was created as a coding challenge for Tabdeal.
- **Built by**: [itmysm](https://github.com/itmysm)