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

//Creating the middelwares for handling error
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error' 
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});