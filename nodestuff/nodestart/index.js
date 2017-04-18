const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.get('/', (request, response)=>{
	response.render('home', {
		name: 'John'
	})
})

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

// const users = []

// app.post('/users', function(req, res){
// 	//retrieve user posted data from the body
// 	const user = req.body
// 	users.push({
// 		name: user.name,
// 		age: user.age
// 	})
// 	res.send('successfully registered')
// })

const fs = require('fs')

app.post('/users', function(req, res){
	const user = req.body
	fs.appendFile('users.txt', JSON.stringify({ 
		name: user.name, age: user.age}), (err) =>{
		res.send('successfully registered')
	})
})
