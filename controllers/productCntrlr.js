// const productModel=require('./../models/product.model')
const productRepository = require('./../Repository/productRepository')

const hasValidationError = (err) => {
    return err && err.message && err.message.indexOf('validation') > -1
}

const formatErrors = (errors) => {
    const errorResponse = [];

    for (let key in errors) {
        const err = {
            field: errors[key].path,
            message: errors[key].message,
        }
        errorResponse.push(err)

    }
    return errorResponse
}
class ProductCntrl {



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

    // async get(req,res){
    //     try{
    //     const data=await productRepository.get()
    //     res.status(200)
    //     res.json(data)
    //     }catch(err){
    //         console.log(err)
    //         res.status(500)
    //         res.send('Invalid Server Error')
    //     }

    // }

    //get request with pagination
    async get(req, res) {
        try {
            const options={

                pageSize:+req.params.limit||10,
                pageNumber : +req.params.page||1,
                sort:req.query.sort||'updatedDate',
                direction:req.query.direction||'asc',
                search:req.query.search || '',
               
            }

            const count=await productRepository.getCount(options);
            const data = await productRepository.get(options)

            const response={
                metadata:{
                    count:count,
                    pages:Math.ceil(count/options.pageSize)
                },
                data,
            }


            res.status(200)
            res.json(response);
        } catch (err) {
            console.error(err)
            res.status(500)
            res.send('Internal Server Error')
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

    async post(req, res) {
        try {
            const data = await productRepository.post(req.body)
            res.status(200)
            res.send('Created')
        } catch (err) {
            if (hasValidationError(err)) {
                res.status(400)
                res.json(formatErrors(err.errors))
            } else {

                console.log(err)
                res.status(500)
                res.send('Internal Server Error')
            }

        }
    }
    //important here is the id is passed in parameters and not in body
    async getById(req, res) {
        try {
            const id = req.params.id
            const data = await productRepository.getById(id)
            res.status(200)
            res.json(data)
        } catch (err) {
            console.log(err)
            res.status(500)
            res.send('Invalid Server Error')
        }
    }

    async remove(req, res) {
        try {
            const id = req.params.id
            await productRepository.remove(id)
            res.status(204)
            res.send('Deleted')
        } catch (err) {
            console.err(err)
            res.status(500)
            res.send('Internal Server Error')
        }
    }

    async put(req, res) {
        try {
            const data = req.body;
            const id = req.params.id;
            await productRepository.put(id, data)
            res.status(200)
            res.send('Record Updated')
        } catch (err) {
            if(hasValidationError(err)){
                res.status(400)
                res.json(formatErrors(err.errors))
            }else{

                res.status(500)
                res.send('Internal Server Error...')
            }
        }
    }


    async patch(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            await productRepository.patch(id, data);
            res.status(200);
            res.send('Record Updated Succesfully');
        } catch (err) {
            console.error(err)
            res.status(500)
            res.send('Internal Server Error')
        }
    }
}

module.exports = new ProductCntrl()