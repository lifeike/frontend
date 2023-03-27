const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api/remote",
    createProxyMiddleware({
      target: "https://crpax8z6j9.execute-api.us-east-1.amazonaws.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api/remote": "",
      },
    })
  ),
    app.use(
      "/api/localhost",
      createProxyMiddleware({
        target: "https://crpax8z6j9.execute-api.us-east-1.amazonaws.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api/localhost": "",
        },
      })
    )
}
