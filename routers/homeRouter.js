const express=require('express')
const router=express.Router()
const homeCntrlr=require('./../controllers/homeCntrlr')

router.get('/',homeCntrlr.home)



router.get('/health',homeCntrlr.health)

module.exports=router;