//https://www.youtube.com/watch?v=2TKh3aokgec
// Setting Up a Windows PC For Web Development: WSL, Git, Node.js, Docker, Oh My Zsh, & MySQL


const express = require('express')
const mysql = require('mysql2/promise')
const app = express()

let de


async function go () {
    db = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'example',
        database: 'pets'
    })
    app.listen(3000)
}

go()

app.get ('/', async(req, res) => {
    const [users] = await db.execute('SELECT * FROM users')
    console.log(users)
    // res.send('<h1>Hello! Welcome.</h1>')
    res.send(`<ul>${users.map(animal => `<li>${animal.name}</li>`).join('')}</ul>`)
})





