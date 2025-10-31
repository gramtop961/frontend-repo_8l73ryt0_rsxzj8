import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      'ta-01k8wv62b5aste14b6p2rkkd30-3000.wo-xdth1keyztijbntw8n8z2dw09.w.modal.host',
    ],
  },
});
