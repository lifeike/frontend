const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ec2-44-202-163-115.compute-1.amazonaws.com",
      changeOrigin: true,
    })
  )
}
