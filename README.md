# Ahmed Mohamed — Full-Stack Software Engineer Portfolio

Personal portfolio website for Ahmed Mohamed, showcasing full-stack web applications, backend systems, 3D experiences, cloud interests, networking knowledge, and AI automation work.

The site is designed as a cinematic, responsive experience with a dark space-inspired visual system, animated transitions, interactive project previews, and a mobile navigation menu.

## Overview

This portfolio includes:

- Responsive hero section with animated introduction
- Blackhole video background and interactive starfield
- About section with engineering focus and profile highlights
- Technical skills grouped by domain
- Selected projects with live demos and source repositories
- Training and experience timeline
- Contact section with email, GitHub, LinkedIn, and location details
- Downloadable CV
- Responsive desktop and mobile navigation

## Featured Projects

| Project | Description | Technologies |
| --- | --- | --- |
| [ArtScape](https://github.com/KiraIIV-max/ArtScape) | Full-stack art auction marketplace | React, Laravel, PHP, MySQL, REST API |
| [Eventra](https://eventra-xi-five.vercel.app/) | Event discovery and booking platform | React, Vite, React Router, Tailwind |
| [DriveOn](https://driveon-delta.vercel.app/) | Premium car rental experience | React, Tailwind, GSAP, React Router |
| [MacBook Pro](https://mac-book-pro-phi.vercel.app/) | Interactive 3D product showcase | Three.js, React Three Fiber, GSAP, Zustand |
| [CPU Scheduling Simulator](https://github.com/KiraIIV-max/CPU-SCHEDULING-SIMULATOR) | JavaFX application for CPU scheduling visualization | Java, JavaFX, OOP, Algorithms |
| [Noiré](https://noire-two-sigma.vercel.app/) | Premium café website and menu experience | React, Vite, GSAP, CSS |

## Tech Stack

### Application Development

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- Framer Motion
- GSAP

### Backend and Data

- Node.js
- Express.js
- Laravel
- PHP
- REST APIs
- JWT and authentication concepts
- MongoDB
- MySQL
- Prisma

### Infrastructure and Engineering

- Linux
- Docker
- Nginx
- AWS fundamentals
- Git and GitHub
- Postman
- Networking fundamentals
- n8n and AI automation

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/KiraIIV-max/ahmed-portfolio.git
cd ahmed-portfolio
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```

## Project Structure

```text
app/
  layout.tsx             Root layout, metadata, and global providers
  page.tsx               Portfolio page composition
  globals.css            Global styles and visual utilities

components/
  main/                  Main portfolio sections
  sub/                   Hero and supporting presentation components

constants/
  index.ts               Social links and shared portfolio data

public/
  Project images, videos, icons, logos, and CV
```

## Media Assets

The visual experience uses local assets from the `public/` directory, including:

- `blackhole.webm` for the hero background
- `cards-video.webm` for the skills section
- `encryption.webm` for the security section
- Project preview images
- Logo and social icons
- Ahmed Mohamed CV PDF

## Deployment

The project can be deployed to any platform that supports Next.js. A typical production flow is:

```bash
npm run build
npm run start
```

Vercel is a convenient deployment option for this project because it provides native Next.js support.

## Contact

- Email: [ahmedmoh01500@gmail.com](mailto:ahmedmoh01500@gmail.com)
- GitHub: [KiraIIV-max](https://github.com/KiraIIV-max)
- LinkedIn: [Ahmed Mohamed](https://www.linkedin.com/in/ahmed-mohamed-1012a6353)
- Location: Cairo, Egypt

## License

This repository contains a personal portfolio. Project code and media are provided for portfolio and demonstration purposes.
