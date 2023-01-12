module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com']
  },
  async redirects(){
    return[
      {
        source: "/collection/products/:id",
        destination: "/products/:id",
        permanent: false
      }
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
}
