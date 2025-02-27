import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  images: {
    unoptimized: true,
  },
  basePath: "/app-static-cloud", // Cambia "TU_REPO" por el nombre de tu repo en GitHub
  assetPrefix: "/app-static-cloud/", // También usa el nombre del repo aquí
  
};

export default nextConfig;
