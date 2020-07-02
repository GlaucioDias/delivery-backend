const Product = require('../model/product')

class ProductController {
    async store(req, res) {
        const products = await Product.create(req.body)
        return res.json(products)
    }

    async index(req, res) {
        const data = await Product.find({})
        return res.json(data)
    }

    async show(req, res) {
        const { id } = req.params;
        const product = await Product.find({ _id: id })
        return res.json(product)
    }

    async update(req, res) {
        const { id } = req.params
        const items = req.body
        const productUpdated = await Product.findByIdAndUpdate(id, items, {
            new: true
        })
        return res.json(productUpdated)
    }

    async delete(req, res) {
        const { id } = req.params
        const items = req.body
        const productRemoved = await Product.findByIdAndUpdate(id, items, {
            new: true
        })
        return res.json(productRemoved)
    }
}

module.exports = new ProductController()

