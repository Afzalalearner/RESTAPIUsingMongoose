const path=require('path')
const fs=require('fs')
const express=require('express')
const app=express()
const morgan=require('morgan')
const mongoose=require('mongoose');
const homeRouter=require('./routers/homeRouter')
const productRouter=require('./routers/productRouter')

const filepath=path.join(__dirname,'logs','request.log')
const fileStream=fs.createWriteStream(filepath,{flags:'a'})
const port=process.env.port||3000;

app.use(express.json())
app.use(morgan('combined',{stream:fileStream}))

const logsDir=path.join(__dirname,'logs')
if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir)
}


app.use('/',homeRouter)
app.use('/api/products',productRouter)

app.get('*',(req,res)=>{
    res.status(404)
    res.send('Page Not found')
})

mongoose.connect('mongodb://127.0.0.1:27017/myapp',()=>{
    console.log('Connected to DB')
})

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}...`)})