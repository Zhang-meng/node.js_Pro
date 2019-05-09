var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){

	console.log('收到客户端请求了,请求路径是：'+req.url)

	// response.write('Hello,I am coming 你好 ')

	// response.write('Hello,I am coming')

	if(req.url==='/abc')
	{

		res.end('abc')	
	}
	else if(req.url==='/')
	{
		res.end('first')
	}
	else
	{

		res.end('404 Not Fond')	
	}
	

})

server.listen(5000,function(){

	console.log('服务器启动成功了，可以通过http://192.168.0.103:5000/来进行访问了')

})