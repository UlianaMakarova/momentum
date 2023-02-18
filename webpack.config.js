const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports=(env,options)=>{
    const isProduction = options.mode === 'production';
    const config ={
        entry: './src/js/script.js',
        output: {
            path: path.join(__dirname,'/dist'),
            filename: 'script.js' 
        },
        plugins: [new CleanWebpackPlugin(),],

    }
    return config;
}