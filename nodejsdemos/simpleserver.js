const http = require("http")
const portNo = 9000

console.log("--- Our Simple HTTP Server ---")

function handler1(req, res) {
    console.log("In the handler1")
    let msg = "We got a <b>request</b> " + new Date().toLocaleString()
    console.log(msg)
    res.writeHead(200, {"content-type" : "text/html"})
    res.write(msg)
    res.end()
}

const handler2 = (req, res) => {
    console.log("In the handler2", req)
    let msg = "We got a <b>request</b> " + new Date().toLocaleString()
    console.log(msg)
    res.writeHead(200, {"content-type" : "text/html"})
    res.write(msg)
    res.end()
}

http.createServer(handler2)
    .listen(portNo)

console.log("HTTP Server started at " + portNo)

