module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname,
    output: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          // to use spread object operator
          plugins: ['babel-plugin-transform-object-rest-spread']
        }
      }
    ]
  },
}