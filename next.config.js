module.exports = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source: "/collection/products/:id",
        destination: "/products/:id",
        permanent: false
      }
    ]
  }
}
