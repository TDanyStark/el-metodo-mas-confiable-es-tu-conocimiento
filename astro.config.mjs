import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/el-metodo-mas-confiable',
  outDir: 'apps/abbott/el-metodo-mas-confiable',
  integrations: [tailwind()]
});