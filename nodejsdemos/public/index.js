console.log("JS will be here...")
// I will be using the fetch API to get the info from our REST server
// let url = "http://localhost:9000/users/"  // This is the absolute URL
let url = "/users/"  // This is the relative URL that we are loading from our server
let usersEl = document.getElementById("users")
let booksEl = document.getElementById("books")
let btn1El = document.getElementById("btn1")
let btn2El = document.getElementById("btn2")
let queryEl = document.getElementById("query")
let nameEl = document.getElementById("name")
let usernameEl = document.getElementById("username")


const showWelcomeMessage = () => {
    let userName = localStorage.getItem("name")
    if (userName) {
        console.log("We got the userName " + userName + " from localStorage!")
        if (userName) {
            let info = `<h4>Welcome back ${userName}</h4>`
            console.log("Info is " + info)
            usernameEl.innerHTML = info
        }
    }
}

showWelcomeMessage()



fetch(url)
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            console.log("User: ", user.id, user.name, user.age)
            let {id, name, age} = user
            let child = document.createElement("div")
            child.innerHTML = `<b>Id:</b> ${id} <b>name:</b> ${name} <b>age: </b> ${age} <br>`
            usersEl.appendChild(child)
        })
    })


const search = (query) => {
    // Let's get the books and populate the UI info...    
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + query
    // console.log("URL ", url)
    booksEl.innerHTML = ""

    fetch(url)
        .then(res => res.json())
        .then(meta => {
            let books = meta.items

            // If no books found just return!
            if (!books) return

            books.forEach(book => {            
                let { volumeInfo } = book
                let {title, subtitle, authors, description, imageLinks} = volumeInfo
                let child = document.createElement("div")
                child.innerHTML = `
                    <div class="book">
                        <h3>${title}</h3>
                        <hr>
                        <h4>${subtitle || "N/A"}</h4>
                        <div class="book-description">
                            <img src="${imageLinks.smallThumbnail}" width="150px" alt="Book image"/>
                            ${description}
                        </div>
                    </div>
                `
                booksEl.appendChild(child)
            })
        })
}

btn1El.onclick = () => {
    console.log("You clicked a button... ")
    let query = queryEl.value
    search(query)
}

btn2El.onclick = () => {
    console.log("You clicked the Save button... ")
    let name = nameEl.value
    localStorage.setItem("name", name)
    showWelcomeMessage()
}

