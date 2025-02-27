import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Sin espacio extra
  images: {
    unoptimized: true, // Necesario para `next export`
  },
  basePath: "/app-static-cloud", // Cambia según la URL de Azure si es necesario
  assetPrefix: "/app-static-cloud/", // Asegúrate de que sea la misma ruta donde se sirven los archivos estáticos
};

export default nextConfig;
