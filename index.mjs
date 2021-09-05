import http from 'http';

const host = "localhost";
const port = 8000

const server = http.createServer((req,res) => {
if(req.meyhod === 'POST'){
    let body = ''

    req.on('data', chunk =>{
        body += chunk
    })

    req.on('close', () =>{
        console.log(body)
    })

    req.writeHead(201)
    res.end('ok')
}
else{
    res.writeHead(200)
    res.end('hi i m sorry')
}

})

server.listen(port, host, () =>{
    console.log(`Server on ${host} : ${port}`)
})