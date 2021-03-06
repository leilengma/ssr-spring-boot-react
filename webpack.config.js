var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    entry: ["@babel/polyfill", path.resolve(__dirname, "./components/index.js")],
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
	output: {
		path: path.resolve(__dirname, "./src/main/resources/static/js"),
		filename: "main.js"
	},
    resolve: {
        extensions: [".jsx", ".json", ".js"]
    },
    // optimization: {
    //     splitChunks: {
    //       chunks: "all"
    //     }
    // },
    devtool: 'source-map'
};