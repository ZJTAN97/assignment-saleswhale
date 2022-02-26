const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            // for css
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // for images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            // for svgs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./public/index.html"),
        }), // this plug inject bundle.js into the index.html and place the index.html in build folder
        // notice that the html file does not have a script tag, its handled by this plugin
    ],
}
