var http = require('http');
var url = require('url');
var querystring = require('querystring');
var params = querystring.parse(url.parse(req.url).
query);
res.writeHead(200, {"Content-Type": "text/plain"});
var params = querystring.parse(url.parse(req.url).
query);
if ('ope1' in params && 'ope2' in params && 'operator' in params) {
    
var result;
 
switch(operator){
    case '-':result=parseInt(ope1)-parseInt(ope2);res.write(ope1+'+'+ope2+'='+result);break;
    case '+':result=parseInt(ope1)+parseInt(ope2);res.write(ope1+'-'+ope2+'='+result);break;
    case '/':result=parseInt(ope1)/parseInt(ope2);res.write(ope1+'/'+ope2+'='+result);break;
    case '*':result=parseInt(ope1)*parseInt(ope2);res.write(ope1+'*'+ope2+'='+result);break;
}
}
else{
res.write('Vous devez bien avoir un nombre 1 et nombre 2 et operant, non ?');
}
 
res.end();
 
server.listen(8080);