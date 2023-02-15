const webpack=require('webpack');
const path = require('path');

module.exports=(env,options)=>{
    const isProduction = options.mode === 'production';
    const config ={
        entry: './src/js/script.js',
        output: {
            path: path.join(__dirname,'/dist'),
            filename: 'script.js' 
        }

    }
    return config;
}