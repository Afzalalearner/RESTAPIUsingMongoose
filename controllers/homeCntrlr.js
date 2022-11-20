const logger=require('./../utils/appLogger')
const path=require('path')

const home=(req,res)=>{
    
    const filePath = path.resolve(__dirname, 'index.html');
    res.status(200);
    res.sendFile(filePath);
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