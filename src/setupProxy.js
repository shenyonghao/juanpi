const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'https://webservice.juanpi.com',changeOrigin:true }));
  app.use(proxy('/act', { target: 'https://m.juanpi.com',changeOrigin:true }));
};
