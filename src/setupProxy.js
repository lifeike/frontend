const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ec2-54-166-223-204.compute-1.amazonaws.com/",
      changeOrigin: true,
    })
  )
}
