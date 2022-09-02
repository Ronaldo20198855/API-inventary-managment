const mongo = require('mongoose');
const Product = require('../models/product');

const findAllProducts = (req, res) =>{
    Product.find((err, products)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(products);
    });
};

const findById = (req, res) =>{
    Product.findById(req.params.id,(err, products)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(products);
    });
};

const addProduct = (req, res)=>{
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock
    });

    product.save((err, prdct)=>{
        err && res.status(500).send(err.message);

        res.status(200).json({"msg": "El producto se a creado correctamente"});
    });
}
    const deleteProduct = (req, res) =>{
        Product.deleteOne({"_id":req.params.id},(err, products)=>{
            err && res.status(500).send(err.message);
    
            res.status(200).json({"msg": "El producto se a eliminado correctamente"});
        })
    };

    const updateProduct = (req, res)=>{
        let product = ({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock
        });
        let id ={"_id": req.params.id}
    
        Product.updateOne(id, product,{upsert: true},(err, product)=>{
            err && res.status(500).send(err.message);
    
            res.status(200).json({"msg": "El producto se a editado correctamente"});
        });
    
    };

    module.exports = {
        addProduct, 
        findAllProducts,
        findById,deleteProduct,
        updateProduct
    }
