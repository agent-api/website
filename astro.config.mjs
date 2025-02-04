// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'agent-api',
			social: {
				github: 'https://github.com/agent-api',
			},
			sidebar: [
				{
					label: 'Start Here',
                    autogenerate: { directory: 'start-here' },
				},
				{
					label: 'Guides',
                    autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
