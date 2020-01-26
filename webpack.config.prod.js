var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    entry: ["@babel/polyfill", path.resolve(__dirname, "./components/index.js")],
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
};