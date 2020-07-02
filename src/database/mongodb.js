const mongoose = require('mongoose')

class MongoDB {
    static connect() {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, function (error) {
            if (!error) return
            console.log('Connection failure', error)
        })
        const connection = mongoose.connection
        connection.once('open', () => console.log('Database running!'))
        return connection
    }
}

module.exports = MongoDB