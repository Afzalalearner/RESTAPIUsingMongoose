// const productModel=require('./../models/product.model')
const productRepository=require('./../Repository/productRepository')



class ProductCntrl{


    //get request with .then()
    // get(req,res){
    //     productModel.find()
    //     .then(data=>{
    //         res.status(200)
    //         res.json(data)
    //     }).catch(err=>{
    //         console.error(err)
    //         res.status(500)
    //         res.send('Internal Server Error')
    //     })

    // }



//get request with async and await
    // async get(req,res){
    //    try{
    //     const projections={_id:0,__v:0,createdDate:0,updatedDate:0}
    //     const data= await productModel.find({},projections)
    //     res.status(200)
    //     res.json(data)
    // }catch(err){
    //     console.log(err)
    //     res.status(500)
    //     res.send(err)
    // }
    // }


// get request with async and await 
//seperation of concerns
//productRepository talking with database now

async get(req,res){
    try{
    const data=await productRepository.get()
    res.status(200)
    res.json(data)
    }catch(err){
        console.log(err)
        res.status(500)
        res.send('Invalid Server Error')
    }

}



//Post Request with .then 
    // post(req,res){
    //     const data=req.body;
    //     const product=new productModel(data)

    //     product.save()
    //     .then(()=>{
    //         res.status(201)
    //         res.send('Created')
    //     }).catch((err)=>{
    //     console.log(err)
    //     res.status(500)
    //     res.send('Invalid Server Error')
    //     })
    // }


    //post request with async and await
    // async post(req,res){
    //  try{   
    //     const data=req.body;
    //     const product=new productModel(data)

    //     const result=await product.save()
    //     res.status(200)
    //     res.send('Created')
    // }catch(err){
    //     console.log(err)
    //     res.status(500)
    //     res.send('Internal Server Error...')
    // }

    // }


    //post request with async and await
    //seperation of concerns
    //product repository now talking to db
    //productcontroller will do handling,asnyc operations and error handling

    async post(req,res){
     try{
        const data= await productRepository.post(req.body)
     res.status(200)
     res.send('Created')
    }catch(err){
        console.log(err)
        res.status(500)
        res.send('Internal Server Error')

    }
    }
//important here is the id is passed in parameters and not in body
    async getById(req,res){
        try{
        const id=req.params.id
        const data=await productRepository.getById(id)
        res.status(200)
        res.json(data)
        }catch(err){
            console.log(err)
            res.status(500)
            res.send('Invalid Server Error')
        }
    }

}

module.exports=new ProductCntrl()