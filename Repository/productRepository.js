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
    return productModel.findOne({_id:id},projections)
}

const remove=((id)=>{
    return productModel.deleteOne({_id:id})
})

const put=(id,data)=>{
    return productModel.updateOne({_id:id},{$set:{
        brand:data.brand,
        model:data.model,
        price:data.price,
        instock:data.instock,
        discount:data.discount,
        updatedDate:Date.now(),
        createdDate:Date.now()
    }})
}

const patch=(id,data)=>{
    const updateObj={}
    delete data._id;
    for(let key in data){
        console.log(key)
        updateObj[key]=data[key]
        console.log(updateObj[key])
    }

   return productModel.updateOne({_id:id},{$set:updateObj})

}

module.exports={
    get,
    post,
    getById,
    remove,
    put,
    patch,
}