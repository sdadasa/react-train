const path = require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports = function(env , argv){
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production' ;
    return {
    mode:isEnvProduction?'production':isEnvDevelopment && 'development',
    devtool:isEnvProduction?'source-map':isEnvDevelopment && 'cheap-module-source-map',
    entry: {
        index:'./src/index.js',
        
       
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
   devServer:{
       contentBase:'./dist',
   },
   plugins:[
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:"public/index.html"
    })
],
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
    ],
   
    }
};
}