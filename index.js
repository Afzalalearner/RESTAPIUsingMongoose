const express=require('express')
const app=express()
const mongoose=require('mongoose');
const productCntrlr = require('./controllers/productCntrlr');
const homeRouter=require('./routers/homeRouter')
const productRouter=require('./routers/productRouter')

const port=process.env.port||3000;

app.use(express.json())

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