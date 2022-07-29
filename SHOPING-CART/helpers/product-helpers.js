var db = require('../config/connection')
var collection = require('../config/collections');
var objectId = require('mongodb').ObjectId
const { response, request } = require('../app');
module.exports = {

    addProduct: (product, callback) => {
        console.log(product);
        db.get().collection('product').insertOne(product).then((data) => {
            console.log(data);
            callback(data.insertedId)
        })

    },
    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct:(prodId)=>{
        return new Promise((resolve,reject)=>{
            console.log(prodId);
            console.log(objectId(prodId));
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(prodId)}).then((response)=>{
                resolve(response)
            })
        })
    }
}