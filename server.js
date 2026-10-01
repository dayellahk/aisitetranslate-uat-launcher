import { createServer } from 'node:http';
createServer((_request,response)=>{response.writeHead(503,{'content-type':'text/plain'});response.end('Deployment is pending.');}).listen(Number(process.env.PORT||3000),'127.0.0.1');
