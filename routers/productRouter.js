const express=require('express')
const productCntrlr = require('../controllers/productCntrlr')
const router=express.Router()

router.get('/',productCntrlr.get)
router.post('/',productCntrlr.post)
router.get('/:id',productCntrlr.getById)
router.delete('/:id',productCntrlr.remove)
router.put('/:id',productCntrlr.put)
router.patch('/:id',productCntrlr.patch)


module.exports=router;