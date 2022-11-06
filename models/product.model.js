const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    brand:{
        type:String,

},
    model:String,
    price:Number,
    instock:Boolean,
    discount:Number,
    createdDate:{
    type:Date,
    default:new Date(),
    immutable:true,

    },
    updatedDate:{
        type:Date,
        default:Date.now()
},
})

const productModel=mongoose.model('product',productSchema)

module.exports=productModel;