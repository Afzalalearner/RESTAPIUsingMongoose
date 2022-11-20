
const express=require('express')
const app=express()
const morgan=require('morgan')
const mongoose=require('mongoose');
const homeRouter=require('./routers/homeRouter')
const productRouter=require('./routers/productRouter')
const fileStream=require('./utils/requestLogger')
const bodyparser=require('body-parser')
const config=require('./config/index')

const port=process.env.port||3000;

app.use(bodyparser())
app.use(morgan('combined',{stream:fileStream}))




app.use('/',homeRouter)
app.use('/api/products',productRouter)

app.get('*',(req,res)=>{
    res.status(404)
    res.send('Page Not found')
})

mongoose.connect(config.dbconStr,()=>{
    console.log('Connected to DB')
})

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}...`)})