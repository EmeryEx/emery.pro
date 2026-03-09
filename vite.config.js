import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        privacyPolicy: resolve(process.cwd(), 'app/pgp-andy/privacy-policy/index.html')
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});
