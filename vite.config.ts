import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HandleReferral',
      fileName: (format) => `handle-referral.${format}.js`,
      formats: ['es', 'umd'], // Export both ES and UMD formats
    },
  },
  plugins: [dts()],
});
