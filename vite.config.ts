import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@store': path.resolve(__dirname, './src/store'),
      '@api': path.resolve(__dirname, './src/store/api'),
      '@core': path.resolve(__dirname, './src/core'),
      '@core/constants': path.resolve(__dirname, './src/core/constants/index.ts'),
      '@core/types': path.resolve(__dirname, './src/core/types/index.ts'),
    }
  },
  plugins: [react()]
});
