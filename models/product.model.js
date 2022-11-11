const { kStringMaxLength } = require('buffer')
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    brand:{
        type:String,
    required:[true,'Brand is Mandatory'],
    minlength:[3,'Minimum 3 Characters'],
    maxlength:[30,'Maximum 30 Characters']},
 
    model:{
        type:String,
        required:[true,'Model is Mandatory'],
    minlength:[3,'Minimum 3 Characters'],
    maxlength:[30,'Maximum 30 Characters']},
    
    price:Number,
    instock:Boolean,
    discount:Number,
    createdDate:{
    type:Date,
    
    immutable:true,

    },
    updatedDate:{
        type:Date,
        default:Date.now
},
})

const productModel=mongoose.model('product',productSchema)

module.exports=productModel;