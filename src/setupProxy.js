const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "http://ec2-44-202-163-115.compute-1.amazonaws.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/v1": "",
      },
    })
  ),
    app.use(
      "/api/localhost",
      createProxyMiddleware({
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api/localhost": "",
        },
      })
    )
}
