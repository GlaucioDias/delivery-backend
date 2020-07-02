const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        items_products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                require: true
            }
        ],
        canceled: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model('orders', orderSchema)

