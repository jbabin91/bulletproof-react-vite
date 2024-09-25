/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  preview: {
    port: 5173,
  },
  server: {
    port: 5173,
  },
  test: {
    coverage: {
      include: ['src/**'],
    },
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/e2e/**'],
    globals: true,
    setupFiles: './src/testing/setup-tests.ts',
  },
});
