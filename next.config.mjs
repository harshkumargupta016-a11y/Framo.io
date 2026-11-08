/**
 * NEXT CONFIGURATION
 * What this file does: Configures Next.js compilation, strict mode, and production optimizations for Vercel.
 * What to edit: Add domains to images.remotePatterns or custom redirects/headers here.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

