const productModel = require('./../models/product.model')




const getCount = () => {
    return productModel.count();
}

// const get=(req,res)=>{
//     const projections={__v:0,createdDate:0,updatedDate:0}
//     return productModel.find({},projections)

// }

const getSortBy = (sort) => {

    switch (sort.toLowerCase()) {
        case 'brand':
            return 'brand';
        case 'model':
            return 'model'
        case 'price':
            return 'price'
        case 'discount':
            return 'discount'
        default:
            return 'updatedDate'
    }
}

const getSortDirection = (direction) => {
    switch (direction.toLowerCase()) {
        case 'asc':
        case 'ascending':
            return 1;

        case 'desc':
        case 'dsc':
        case 'descending':
            return -1;

        default:
            return 1;

    }
}

const get = (options) => {
    const { pageSize, pageNumber, sort, direction} = options
    
    
    const projections = { _id: 1, __v: 0, createdDate: 0, updatedDate: 0 }
    const documentsToSkip = (pageNumber - 1) * pageSize;

    const sortByField = getSortBy(sort)
    const sortByDirection = getSortDirection(direction)






    return productModel.find({}, projections)
        .sort({ [sortByField]: sortByDirection })
        .skip(documentsToSkip)
        .limit(pageSize)

}

const post = (data) => {
    data.createdDate = new Date()
    // const data=req.body;
    const product = new productModel(data)
    return product.save()
}

const getById = (id) => {
    const projections = { __v: 0, createdDate: 0, updatedDate: 0 }
    return productModel.findOne({ _id: id }, projections)
}

const remove = ((id) => {
    return productModel.deleteOne({ _id: id })
})

const put = (id, data) => {
    return productModel.updateOne({ _id: id }, {
        $set: {
            brand: data.brand,
            model: data.model,
            price: data.price,
            instock: data.instock,
            discount: data.discount,
            updatedDate: Date.now(),

        }
    })
}

const patch = (id, data) => {
    const updateObj = {}
    delete data._id;
    for (let key in data) {
        console.log(key)
        updateObj[key] = data[key]
        console.log(updateObj[key])
    }

    return productModel.updateOne({ _id: id }, { $set: updateObj })

}


module.exports = {
    get,
    post,
    getById,
    remove,
    put,
    patch,
    getCount,
}