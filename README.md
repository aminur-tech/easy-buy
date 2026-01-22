# Easy Buy

A modern, full-stack e-commerce web application built with Next.js and TypeScript, designed to deliver a fast, secure, and responsive online shopping experience.

## 🌐 Live Demo

[View Live Demo](https://easy-buy-alpha.vercel.app)

## ✨ Features

- **Secure User Authentication**: Full authentication and authorization flow.
- **Product Catalog**: Browse products with advanced search and filtering.
- **Shopping Cart**: Dynamic and persistent shopping cart functionality.
- **Order Management**: Seamlessly place and track order history.
- **Responsive Design**: Optimized for a consistent experience across all devices.

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: Next.js Action Routes
- **Database**: [MongoDB](https://www.mongodb.com/) (easily swappable with other databases)
- **Linting & Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have Node.js (v18 or later) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/aminur-tech/easy-buy
    cd easy-buy
    ```

2.  Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  Set up your environment variables by creating a `.env.local` file in the root of the project. You can use `.env.example` as a template.
    ```sh
    cp .env.example .env.local
    ```
    > **Note:** You will need to add your own `DATABASE_URL` and other sensitive credentials to this file.

### Running the Application

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

