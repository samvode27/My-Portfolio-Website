import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-Portfolio/', // <-- important! Use your repo name here
  plugins: [react()],
});
