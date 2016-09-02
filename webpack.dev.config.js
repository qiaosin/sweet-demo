var path = require('path')

//配置文件是放在config的目录下的，所有这里定义了一个项目的根目录变量
//var projectRootPath = path.resolve(__dirname,'') 

var config = {
  entry: path.resolve(__dirname, 'src/entries/index.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }
    ]
  }
}

module.exports=config;