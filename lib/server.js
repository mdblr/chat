import http from 'http'

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello Max\n')
}).listen(8080, '127.0.0.1')

console.log('Server running at 127.0.0.1:8080')
