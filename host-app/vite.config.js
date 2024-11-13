import federation from '@originjs/vite-plugin-federation';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        microFrontend1: 'http://localhost:3001/assets/remoteEntry.js',
        microFrontend2: 'http://localhost:3002/assets/remoteEntry.js',
        microFrontend3: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3000, // Set to 3000 or any preferred port
  },
});
