const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api/remote",
    createProxyMiddleware({
      target: "http://3.82.218.65/",
      changeOrigin: true,
      pathRewrite: {
        "^/api/remote": "",
      },
    })
  ),
    app.use(
      "/api/localhost",
      createProxyMiddleware({
        target: "http://3.82.218.65/",
        changeOrigin: true,
        pathRewrite: {
          "^/api/localhost": "",
        },
      })
    )
}
