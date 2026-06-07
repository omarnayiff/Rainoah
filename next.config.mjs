/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build 100% estático -> gera a pasta /out (sobe pro public_html da Hostinger).
  output: "export",
  // Sem otimização de imagem no servidor (não há servidor Next em produção).
  images: {
    unoptimized: true,
  },
  // Gera /pagina/index.html (rotas amigáveis em hospedagem estática).
  trailingSlash: true,
};

export default nextConfig;
