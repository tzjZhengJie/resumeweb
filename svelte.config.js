import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 preprocess: vitePreprocess(),
 vitePlugin: {
  inspector: true
 },
 kit: {
  adapter: adapter(),
  paths: {
   base: process.env.NODE_ENV === 'production' ? '/resume-website' : ''
  }
 }
};

export default config;
