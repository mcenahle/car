// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://car.mcenahle.edu.pl",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
});
