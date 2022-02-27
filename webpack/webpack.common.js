const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: ["src", "node_modules"]
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
            // TypeScript
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                  }
                ]
            },
            // for css and scss
            {
                test: /\.module\.s(a|c)ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
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
