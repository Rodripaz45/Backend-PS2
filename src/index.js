import express from 'express'
import loginroutes from "./routes/login.routes.js"
import registerroutes from "./routes/register.routes.js"

const app = express()

app.use(express.json())

app.use(loginroutes)
app.use(registerroutes)

app.listen(3000)
console.log("Server running on port 3000")