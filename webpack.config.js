var path = require('path')
var webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    template: './15_Vue/1502_VueTypeScript/main.ts',
  },
  output: {
    path: path.resolve(__dirname, './16_Vue/1502_VueTypeScript'),
    publicPath: '/built/',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve("src"),
        use: [
          {
            loader: "thread-loader",
            options: {
              workers: require('os').cpus().length - 1,
            }
          }
          // your expensive loader (e.g babel-loader)
        ]
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
        options: {
          configFile: 'tslint.json'
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'ts': 'ts-loader!tslint-loader',
          },
          // extractCSS: plugin
          // other vue-loader options go here
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  externals: {
    "vue": "Vue",
    'element-ui': 'ElementUI'
  },
  cache: true,
  performance: {
    hints: false
  },
  devtool: 'source-map',
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ],


}
