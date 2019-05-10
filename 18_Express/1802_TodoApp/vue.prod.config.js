module.exports = {
  // キャッシュバスティングのためにファイル名にハッシュをつけている。
  // filenameHashing: false,
  chainWebpack: config => {
    config.externals({
      "axios": "axios",
      "vue": "Vue",
      'element-ui': 'ElementUI'
    })
  },
}
