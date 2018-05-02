module.exports = {
  proxy: {
    '/api':{
        target:'http://114.215.195.108:80',
        changeOrigin: true,
        pathRewrite:{
            '/api':''
        }
    }
  }
}
