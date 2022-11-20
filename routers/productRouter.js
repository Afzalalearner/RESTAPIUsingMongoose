const express=require('express')
const productCntrlr = require('../controllers/productCntrlr')
const router=express.Router()
const multer=require('multer')


router.get('/',productCntrlr.get)
router.get('/page/:page',productCntrlr.get)
router.get('/page/:page/limit/:limit',productCntrlr.get)
router.post('/',productCntrlr.post)
router.get('/:id',productCntrlr.getById)
router.delete('/:id',productCntrlr.remove)
router.put('/:id',productCntrlr.put)
router.patch('/:id',productCntrlr.patch)


module.exports=router;