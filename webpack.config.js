const path = require('path');
module.exports = {
    entry: {
        flexjs:'./src/flexjs.js',
        Battle:'./src/Battle.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{ test: /\.js$/, use: 'babel-loader' },
        {test:/\.css$/,
        include:[path.resolve(__dirname, 'src/styles'),/node_modules/],
        use:["style-loader","css-loader"]
        },
        { test: /\.css$/,
            exclude:[path.resolve(__dirname, 'src/styles'),/node_modules/],
            use: ['style-loader','css-loader?modules']},
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ["file-loader"] },{
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
            loader: "url-loader",
            options: {
            limit: 10000
           } }
    ]
    }
};