// This is a simple CRUD application using Node & Express

const express = require("express")
const _ = require("underscore")
const fetch = require("node-fetch")
const app = express()
const portNo = 9000

console.log("--- Simple Express Server ---")

app.use(express.static("public"))

let users = [
    { id: 1, name: "Jane", age: 26},
    { id: 2, name: "Bob", age: 18},
    { id: 3, name: "Zack", age: 33},
]
let userIdCntr = users.length + 1

app.use(express.json())

// app.get("/", (req, res) => {
//     let num = _.random(1, 100)
//     let msg = "Hello from Express server, today is " + new Date().toLocaleString() + " your lucky number is " + num
//     console.log(msg)
//     res.send(msg)
// })

app.get("/time", (req, res) => {
    let info = "Current date&time: " + new Date().toISOString()
    console.log("We got a request at /time endpoint");
    res.send(info)
})

app.get("/search", (req, res) => {
    let query = req.query
    let url = "https://wwww.bing.com/search?q=" + query.q
    console.log("URL: " + url)

    fetch(url)
        .then(res => res.text())
        .then(body => { 
            console.log(body)
            res.send(body)
        })
})

app.get("/users", (req, res) => {
    res.json(users)
})

app.post("/users", (req, res) => {
    let user = { id: userIdCntr++, ...req.body }
    console.log("We got a POST request. Payload", user)
    users.push(user)
    res.status(201)
    res.send("OK")
})

app.delete("/users/:id", (req, res) => {
    let id = req.params["id"]
    console.log("Delete req id is " + id)
    users = users.filter(user => user.id != id)
    res.send("OK")
})

app.put("/users/:id", (req, res) => {
    let id = req.params["id"]
    let user = users.find(user => user.id == id)
    if (user) {
        // Update the user info here...
        let updateInfo = req.body
        user.name = updateInfo.name
        res.json(user)
    }
    else {
        console.log("Cannot find user to update!")
        res.sendStatus(404)
    }
})

app.listen(portNo, () => {
    console.log("Express app started at " + portNo)
})
