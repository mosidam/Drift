import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/saunaHatTryOn.js',
      fileName: () => 'sauna-hat-try-on.js',
      formats: ['es'],
      name: 'DriftSaunaHatTryOn',
    },
    minify: true,
    outDir: 'odoo_addons/drift_coach/static/tryon',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
