import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // ← clé du problème
      interval: 1000, // polling toutes les secondes
    },
    host: '0.0.0.0',
    port: 3000,
  },
});
