const express=require('express')
const productCntrlr = require('../controllers/productCntrlr')
const router=express.Router()

router.get('/',productCntrlr.get)

router.post('/',productCntrlr.post)
router.get('/:id',productCntrlr.getById)
router.delete('/:id',productCntrlr.remove)

module.exports=router;