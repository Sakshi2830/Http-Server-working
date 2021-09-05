import express from "express"
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

//we have to setup our middleware first then setup our routes and lastly we open our server ..


 app.use(bp.urlencoded({extended: true})) //this is going to give if someone parse some data on the query string ,its gonna parse thst for us and it basically just make sure that we can parse the query string and whatever is in the URL pretty easily

 app.use(bp.json())//this allows us to parse json body of a POST request,we can actually see it as a json and not like bits of chunks that we have to add together like we did in http server

 app.use(morgan('dev'))//this gives the type of logging  that we want 

 const db = []

 app.post('/todo', (req,res) =>{
     const newTodo = {
         id: Date.now(),
         text: req.body.text
     }

     db.push(newTodo)

     res.json(newTodo)
 })

 app.get('/todo', (req,res) => {
     res.json(db)
 })

 app.listen(8000, () => {
     console.log('Server on http://localhost:8000')
 })