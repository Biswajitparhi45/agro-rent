// Vite & TanStack Start Configuration for AgriRent
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  } as any,
  vite: {
    ssr: {
      noExternal: [
        /@tanstack\/.*/,
        "@tanstack/*",
        "@floating-ui/react-dom",
        "@floating-ui/core",
        "@floating-ui/utils",
        "@radix-ui/*",
        "lucide-react",
        "motion",
      ],
    },
  },
});
