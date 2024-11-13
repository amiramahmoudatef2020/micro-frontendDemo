import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'micro-frontend-2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3002,
  },
});
