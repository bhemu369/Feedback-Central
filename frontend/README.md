# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Feedback Central Frontend

A modern React application for collecting and displaying user feedback.

## Environment Variables

The application uses environment variables to configure the backend API URL. Create a `.env` file in the frontend directory with the following variables:

```
VITE_API_BASE_URL=https://feedback-central-backend.vercel.app
```

If the environment variable is not set, the application will default to using `http://localhost:4000` as the API base URL.

## Development

To start the development server:

```bash
npm install
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.
