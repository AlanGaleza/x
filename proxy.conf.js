const PROXY_CONFIG = [{
  context: ["/login", "/api", "/logout"],
  target: "http://localhost:8020/",
  secure: false,
  changeOrigin: true,
  onProxyReq: function (proxyReq, req, res) {
    console.log('Using proxy to forward request');
  },
  onProxyRes: function (proxyRes, req, res) {
    updateCookieWithPath(proxyRes, "/", "/api/");
    res.setHeader("Strict-Transport-Security", "maxage=60000; includeSubDomains");
  }
}];

var updateCookieWithPath = function (response, src, dest) {
  var array = response.headers['set-cookie'];
  for (var i in array) {
    var cookie = array[i] + "";
    console.log('>> Cookie: %s', cookie);
    cookie = updateSingleCookie(cookie, src, dest);
    array[i] = cookie;
    console.log('>> After: %s', cookie);
  }
  response.headers['set-cookie'] = array;
};

var updateSingleCookie = function (cookie, src, dest) {
  if (cookie) {
    return cookie.replace(dest, src);
  } else {
    return cookie;
  }
};

module.exports = PROXY_CONFIG;
