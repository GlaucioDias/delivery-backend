const mongoose = require('mongoose')

const MONGO_URI = String(process.env.MONGO_URI)

class MongoDB {
    static connect() {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }, function (error: any) {
            if (!error) return
            console.log('Connection failure', error)
        })
        const connection = mongoose.connection
        connection.once('open', () => console.log('Database running!'))
        return connection
    }
}
export default MongoDB