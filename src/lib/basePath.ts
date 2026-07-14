// Must match `basePath` in next.config.ts. Next.js only rewrites paths
// automatically for next/link and next/image — plain <img src="/..."> tags
// (used here to guarantee real PNG delivery, see Sidebar.tsx) need this
// prefixed manually, both in dev and on GitHub Pages.
export const BASE_PATH = "/pise-bosquemar";
