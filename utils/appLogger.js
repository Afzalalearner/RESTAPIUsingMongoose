const bunyan=require('bunyan');
const path=require('path');
const logger=bunyan.createLogger({
    name:'API',

    streams:[
        {path:path.join(__dirname,'..','logs','app.log'),level:"info"},
        {stream:process.stdout,level:"error"}
    ]
})

module.exports=logger;