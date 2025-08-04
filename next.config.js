export default function Home() {
  return <h1>¡Hola, Next.js en GitHub Pages!</h1>;
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/GENZetaPro',
  assetPrefix: '/GENZetaPro'
}
module.exports = nextConfig
