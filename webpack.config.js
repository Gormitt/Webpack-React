const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target="browserslist";
}

module.exports = {
    mode: mode,
    target: target,
    devtool: false,

    output: {
        path: path.resolve(__dirname, "public"),
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            // .js files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // .css files
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "postcss-loader", 
                    "sass-loader"
                ]
            },
            // images
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: "asset/resource"
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        hot: true,
        compress: true,
        port: 3000
    }
}