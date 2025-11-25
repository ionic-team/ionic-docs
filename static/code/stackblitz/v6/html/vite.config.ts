import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@ionic/core'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/ionicons/dist/svg/*',
          dest: 'svg'
        }
      ]
    })
  ]
});
