const logger=require('./../utils/appLogger')

const home=(req,res)=>{
    res.status(200)
    res.send('Welcome to Home Page...')
}

const health=(req,res)=>{
    logger.info({message:'Health Endpoint is Called',url:req.url})
    res.status(200)
    res.json({status:'Up'})
    logger.info({status:'Up'})
}


module.exports={
    home,
    health,
}