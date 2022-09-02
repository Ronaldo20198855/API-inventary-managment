const productControllers = require('../controllers/products');
const express = require('express');

const router = express.Router();

router.get('/all', productControllers.findAllProducts);
router.get('/:id', productControllers.findById);
router.post('/add', productControllers.addProduct);
router.put('/:id', productControllers.updateProduct);
router.delete('/:id', productControllers.deleteProduct);

module.exports = router;