import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'

const app=express()


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