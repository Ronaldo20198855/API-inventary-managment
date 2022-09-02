const mongo = require('mongoose');
const schema = mongo.Schema;

const productSchema = new schema({
    name: {type: String},
    description: {type: String},
    category: {type: String},
    price: {type: Number},
    stock: {type: Number}
});

module.exports = Product = mongo.model('product', productSchema);