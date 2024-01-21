import express from 'express'
import Router from "./routes/router"
const app = express()

//CONFIG JSON URL,
app.use(express.json())

//ROUTER_API
app.use(Router)

export {app}
