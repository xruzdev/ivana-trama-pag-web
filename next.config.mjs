/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Variantes pre-generadas con `npm run images` (sin optimización on-demand de Vercel)
        loader: "custom",
        loaderFile: "./src/lib/image-loader.ts",
        deviceSizes: [640, 828, 1080, 1280, 1920],
        imageSizes: [48, 96, 128, 256, 384],
    },
};

export default nextConfig;
