import { error } from "console";
import express from "express";
import fs from "fs"

const app = express();

// populate request body
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (request, response) => {
    response.sendFile("/Users/subinbajracharya/Desktop/DentedCode/Projects/Node/pages/home.html")
})

app.get('/login', (request, response) => {
    response.sendFile("/Users/subinbajracharya/Desktop/DentedCode/Projects/Node/pages/login.html")
})

app.post('/login', (request, response) => {
    console.log(request.body)

    // reading users.json file
    let logData = fs.readFileSync("./data/users.json");
    console.log(JSON.parse(logData))

    let userList = JSON.parse(logData)
    let user = userList.find((u) => {
        return u.email === request.body.email && u.password === request.body.password {

        }
    })


    response.send("Login successful")
    response.sendFile("/Users/subinbajracharya/Desktop/DentedCode/Projects/Node/pages/login.html")

})

app.get('/register', (request, response) => {
    response.sendFile("/Users/subinbajracharya/Desktop/DentedCode/Projects/Node/pages/register.html")
})

app.post('/register', async (request, response) => {
    console.log(request.body)

    // reading the file
    let data = fs.readFileSync("./data/users.json");
    console.log(JSON.parse(data))

    let userList = JSON.parse(data)
    userList.push(request.body)

    // writing to file
    fs.writeFile("./data/users.json", JSON.stringify(userList), (error) => {
        if (error) {
            console.log("Error Occured")
        }
    })
    response.sendFile("/Users/subinbajracharya/Desktop/DentedCode/Projects/Node/pages/register.html")
})

app.listen(3000, () => {
    console.log("PORT STARTED at PORT: ", 3000)
})

console.log("Test")