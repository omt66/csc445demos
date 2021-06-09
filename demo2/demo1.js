console.log("Demo1: Simple JS Demo...")

function f1(param1, param2) {
    console.log("param1", param1, "param2", param2)
}

f1("Hello", "World!")
f1("ANother", "Call made to f1()")

function f2(fun1, param1, param2) {
    fun1(param1, param2)
}

f2(f1, "New param1 for f1", "New param2 for f1")

// function <func-name> { <function-body> }
// <func-name> = (<params>) => { <function-body> }

// This is an example of the arrow function
const f3 = (param1, param2) => {
    console.log("In f3 function...")
    console.log("param1", param1, "param2", param2)
}

// setInterval(f1, 5000)
// setInterval(() => {}, 5000)

f3("par1", "par2")

const infoElm = document.getElementById("info")

setInterval(() => {
    let now = new Date().toLocaleString() 
    // let now = new Date().toISOString()
    // console.log("Date&time -> " + new Date().toISOString())
    infoElm.innerHTML = "<b>Date&Time:</b> <i>" + now + "</i>"
}, 1000)


// Let's declare an array
let arr = ["Item1", "Item2", "Item3"]
arr.push("Item4")
for (let i=0;i < arr.length;i++) {
    let arrayInfo = arr[i]
    console.log(" araryInfo = " + arrayInfo)
}

arr.forEach((item) => {
    console.log(" arrayItem (in forEach) = " + item )
})


// Objects
let user1 = {
    name: "Jane",
    age: 26,
    address: {
        line1: "123 Broadway Str",
        line2: "Suite 200",
        city: "San Diego", 
        state: "CA", 
        zip: "92101"
    }
}
console.log("User1 is ", user1)

// Maps
let stateCapitals = {
    AR: "Little Rock",
    CO: "Denver",
    NM: "Santa Fe"
}

stateCapitals["TX"] = "Austin"
stateCapitals["CA"] = "Sacremento"

let captital = stateCapitals["AR"]
console.log("Capital is " + captital)

for (let key in stateCapitals) {
    // console.log("Capital of state", key, "is", stateCapitals[key]);
    // let info = "Capital of state " + key + " is " + stateCapitals[key]
    let info = `Capital of state ${key} is ${stateCapitals[key]}`
    console.log(info)
}

// Maps with objects
let contacts = {
    Rosa: {
       phone: "303-555-4321",
       email: "rosa@gmail.com"
    },
    Dave: {
       phone: "501-533-9988",
       email: "dave@yahoo.com"
    },
    Li: {
       phone: "213-511-6758",
       email: "li@msn.com"
    }
 }

for (let key in contacts) {
    let info = `Contact: ${key} phone: ${contacts[key].phone} email: ${contacts[key].email}`
    console.log(info)
}

// Math object
let n1 = 3.2345
let n2 = Math.floor(n1)
let n3 = Math.ceil(n1)
console.log(`floor(${n1}) = ${n2}`)
console.log(`ceil(${n1}) = ${n3}`)

// Try catch demo
function tryCatchDemo() {
    console.log("Try catch demo...")
    try {
        console.log("In the try block")
        throw "Something wrong happened!"
    }
    catch (ex) {
        console.log("In the catch block")
        console.log("Opps ", ex)
    }
    finally {
        console.log("In the finally block")
    }
}

tryCatchDemo()



function writeToHmltlDemo() {
   // Possible 8-Ball responses
   let responses = [ "Without a doubt", "Ask again later", "Don't count on it", "Maybe", "Yes", "No" ]
 
   // Display a randomly chosen response
   let randomNum = Math.floor(Math.random() * responses.length)
   document.writeln("<p>Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>.</p>")
}

// writeToHmltlDemo()

function call8Ball() {
    let responses = [ "Without a doubt", "Ask again later", "Don't count on it", "Maybe", "Yes", "No" ]
    let randomNum = Math.floor(Math.random() * responses.length)
    let resposeOf8Ball = "Magic 8 Ball says... <strong>" + responses[randomNum] + "</strong>."
    let info2Elm = document.getElementById("info2")
    info2Elm.innerHTML = resposeOf8Ball
}


setTimeout(() => {
    console.log("Timeout happened!")
    // alert("Timed out...")
}, 5000)

let dx = 1
let dy = 1
// setInterval(() => {
//     let ballElm = document.getElementById("ball")
//     let left = parseInt(ballElm.style.left)
//     let top = parseInt(ballElm.style.top)
//     let w = window.innerWidth
//     let h = window.innerHeight

//     if (left >= w || left <= -1) {
//         dx *= -1
//     }

//     if (top >= h || top <= -1) {
//         dy *= -1
//     }

//     ballElm.style.left = left + dx + 'px'
//     ballElm.style.top = top + dy + 'px'

// }, 10)


