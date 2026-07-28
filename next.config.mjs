import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // 今後next/imageを使ってもStatic Exportできるようにする
  images: {
    unoptimized: true,
  },
};

export default withFlowbiteReact(nextConfig);