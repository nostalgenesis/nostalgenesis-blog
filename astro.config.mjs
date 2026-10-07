// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
        markdown: {
      remarkRehype: {
        footnoteLabel: 'Note',
        footnoteLabelProperties: { className: [] },
        footnoteBackLabel: 'Torna al testo',
      },
    },
});
