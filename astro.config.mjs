import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://fastidious-babka-0c5e40.netlify.app",
  integrations: [preact()]
});