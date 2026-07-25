// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    externals: {
      inline: [
        /@tanstack\/.*/,
        "@tanstack/devtools-bundler-core",
        "@tanstack/devtools-client",
        "@tanstack/devtools-event-bus",
        "@tanstack/devtools-event-client",
        "@tanstack/devtools-vite",
        "@tanstack/history",
        "@tanstack/query-core",
        "@tanstack/react-query",
        "@tanstack/react-router",
        "@tanstack/react-start",
        "@tanstack/react-start-client",
        "@tanstack/react-start-rsc",
        "@tanstack/react-start-server",
        "@tanstack/react-store",
        "@tanstack/router-core",
        "@tanstack/router-generator",
        "@tanstack/router-plugin",
        "@tanstack/router-utils",
        "@tanstack/start-client-core",
        "@tanstack/start-fn-stubs",
        "@tanstack/start-plugin-core",
        "@tanstack/start-server-core",
        "@tanstack/start-storage-context",
        "@tanstack/store",
        "@tanstack/virtual-file-routes",
        "@floating-ui/react-dom",
        "@floating-ui/core",
        "@floating-ui/utils",
        "@radix-ui/react-popover",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-dialog",
        "@radix-ui/react-select",
        "@radix-ui/react-context-menu",
        "@radix-ui/react-hover-card",
        "@radix-ui/react-menubar",
        "@radix-ui/react-accordion",
        "@radix-ui/react-avatar",
        "@radix-ui/react-tabs",
      ],
    },
  },
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
