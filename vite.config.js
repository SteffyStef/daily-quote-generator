// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/quote-generator/', // <-- your repo name!
  plugins: [react()],
});

