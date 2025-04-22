# Cristal NFT Faucet Frontend

A modern React-based frontend application for a Web3 faucet service, built with TypeScript, Vite, and TailwindCSS.

## 🚀 Features

- Modern React 18 with TypeScript
- Ethers.js integration for Web3 interactions
- Responsive design with TailwindCSS
- ESLint and Prettier for code quality
- Vite for fast development and building

## 📋 Prerequisites

- Node.js (LTS version recommended)
- pnpm (package manager)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/igortullio/cristal-nft-faucet
cd cristal-nft-faucet
```

2. Install dependencies:
```bash
pnpm install
```

## 🚀 Development

To start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
pnpm build
```

The built files will be in the `dist` directory.

## 🧹 Code Quality

- Run linting:
```bash
pnpm lint
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Web3:** Ethers.js
- **Code Quality:**
  - ESLint
  - Prettier
  - TypeScript

## 📁 Project Structure

```
frontend-faucet/
├── src/
│   ├── components/     # React components
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   ├── abi.json        # Contract ABI
│   └── styles.css      # Global styles
├── public/             # Static assets
└── vite.config.ts      # Vite configuration
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Ethers.js](https://docs.ethers.org/)
