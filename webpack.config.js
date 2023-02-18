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
        module: {
            rules: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                      ]
                    }
                  }
                }
              ],
        },
        plugins: [new CleanWebpackPlugin(),],

    }
    return config;
}