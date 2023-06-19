import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB

//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'
import db from "./database/db.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/men', blogRoutes)

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})