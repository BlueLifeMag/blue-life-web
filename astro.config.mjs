import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sanity from "@sanity/astro"
import react from "@astrojs/react"
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		sanity({
			projectId: 'rl6g1f3q',
			dataset: 'production',
			useCdn: false,
			studioBasePath: '/studio',
			stega: {
				studioUrl: '/studio',
			},

		}),
		react(),
	],
});
