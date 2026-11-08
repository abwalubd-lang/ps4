import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the built site works from any folder or static host.
// SINGLE_FILE=1 inlines every asset (used for the self-contained preview page).
const singleFile = process.env.SINGLE_FILE === '1';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: singleFile ? { outDir: 'dist-single', assetsInlineLimit: 100_000_000 } : {},
});
