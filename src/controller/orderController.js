const Order = require('../model/order')

class OrderController {
    async store(req, res) {
        const order = await Order.create(req.body)
        return res.json(order)
    }

    async index(req, res) {
        const orders = await Order.find({}).populate('items_products')
        return res.json(orders)
    }

    async show(req, res) {
        const { id } = req.params;
        const order = await Order.find({ _id: id }).populate('items_products')
        return res.json(order)
    }

    async update(req, res) {
        const { id } = req.params
        const items = req.body
        const orderUpdated = await Order.findByIdAndUpdate(id, items, {
            new: true
        })
        return res.json(orderUpdated)
    }

    async delete(req, res) {
        const { id } = req.params
        const items = req.body
        const orderRemoved = await Order.findByIdAndUpdate(id, items, {
            new: true
        })
        return res.json(orderRemoved)
    }
}

module.exports = new OrderController()