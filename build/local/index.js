'use strict'

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
console.info('process.env.NODE_ENV',process.env.NODE_ENV);

const opn = require('opn');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('../webpack/webpack.dev.config');
const webpackConfigProd = require('../webpack.build.config');
const Ora = require('ora');

const port = process.env.PORT || config.dev.port;

const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

console.info('webpackConfig.output.publicPath',webpackConfig.output.publicPath);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  path: '/__webpack_hmr',
  quiet: true,
  stats: {
    colors: false,
    hash: false,
    version: false,
    timings: true,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
})
let spinner;
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: function(text){
    spinner.succeed();
    spinner = new Ora({
      text: 'webpack-hot-middleware : '+text+'\n'
    }).start()
  }
})
webpackConfig.entry.app.unshift('webpack-hot-middleware/client')
webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

app.use(hotMiddleware)


Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware)

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const url = 'http://localhost:' + port
spinner = new Ora({
  text: 'Starting dev server on port '+port+'\n'
}).start();
spinner.succeed();
let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

devMiddleware.waitUntilValid(() => {
  spinner.succeed();
  spinner = new Ora({
    text: 'webpack-hot-middleware : start'
  }).start()

  opn(url)
  _resolve()
})

const server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
