import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import userAuth from './routes/auth.route.js'

const app=express()

app.use(express.json())
dotenv.config()
const mongo= mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to  mongoDB...')
}).catch((err) =>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log('server is running at port 3000...')
})

app.use('/api/user',userRouter)
app.use('/api/auth/',userAuth)