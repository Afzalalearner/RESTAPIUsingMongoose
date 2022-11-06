const productModel=require('./../models/product.model')


const get=(req,res)=>{
    const projections={__v:0,createdDate:0,updatedDate:0}
    return productModel.find({},projections)

}

const post=(data)=>{
    // const data=req.body;
    const product=new productModel(data)
    return  product.save()
}

const getById=(id)=>{
    const projections={__v:0,createdDate:0,updatedDate:0}
    return productModel.findOne(id,projections)
}

module.exports={
    get,
    post,
    getById,
}