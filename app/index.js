

// 主要核心逻辑入口
// 
// 
// 
// 


const fs = require('fs');


class App{
	constructor(){

	}
	initServer(){
		//init初始化
		// let _package = require('../package');//package is reserved word(X)

		//高阶函数;
		return (request,response)=>{
			// process.cwd();//count work directory(node环境下运行)
			fs.readFile('./public/index.html','utf8',(error,data)=>{	//异步API
				// console.log(error);
				response.end(data);
				// response.end(JSON.stringify(_package));
			})
		}
	}
}
// ES5
// var App = function(){}
// App.prototype.initServer = (request,response)=>{
// 	response.end('hello fings');
// 	}

module.exports = App;