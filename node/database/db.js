import mongoose from 'mongoose';
const url = 'mongodb://127.0.0.1:27017/ecommerce';
mongoose.connect(url)

const db = mongoose.connection
db.on('open', () =>{ console.log("Connected to database")} )
db.on('error', () =>{ console.log("Error connecting to database")} )

export default db;