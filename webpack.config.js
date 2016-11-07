var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var CleanWebpackPlugin = require('clean-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname,'build');
var APP_DIR = path.resolve(__dirname,'src');
//var PUBLIC_DIR = path.resolve(__dirname,'public');

var dev_plugins = [
	new HtmlWebpackPlugin(
	{
		title:'Sandbox',
		filename:'../index.html',
		template: 'public/index.html'
		})
];

var prod_plugins = [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
	,new HtmlWebpackPlugin({minify:{},title:'Sandbox',filename:'../index.html'})	
];

var shared_plugins = [
	//new CleanWebpackPlugin(['build'])
];

var config = {
	entry: APP_DIR + '/App.js',
	devtool: debug ? "inline-sourcemap" : null,
	output: {
		path: BUILD_DIR + '/js',
		filename: debug ? 'index.js':'index.min.js'
	},
	//plugins were found from a gist online of learncodeacademy
	plugins: shared_plugins.concat(debug ? dev_plugins : prod_plugins),
	module: {
    loaders: [
	  { test : /\.jsx?/, include : APP_DIR, loader : 'babel' },
	  { test : /\.scss$/, loader : 'style!css!sass' },
	  // the style-loader for basic css files
	  { test: /\.css$/, loader: "style!css" },
      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;