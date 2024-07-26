# Subscription App OfferingTree

## Overview

This project is a Next.js 14 application that provides a user-friendly interface for configuring subscription payments. It features a dynamic form that updates in real-time, providing users with immediate feedback on their subscription setup.

## Features

- Interactive subscription configuration form
- Real-time update of subscription summary
- Support for various billing frequencies (daily, weekly, monthly)
- Optional trial period configuration
- Flexible duration settings (never-ending or custom billing cycles)
- Responsive design using Tailwind CSS

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/felpst/subscription-app-offeringtree.git
   ```

2. Navigate to the project directory:

   ```
   cd subscription-app-offeringtree
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

2. Open your browser and visit `http://localhost:3000`

## Project Structure

```
subscription-app-offeringtree/
├── app/
│   ├── components/
│   │   └── SubscriptionForm.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Label.tsx
│       └── index.ts
├── styles/
│   └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contact

Felipe Telles - felipe.t.v.d@gmail.com

Project Link: [https://github.com/felpst/subscription-app-offeringtree](https://github.com/felpst/subscription-app-offeringtree)
