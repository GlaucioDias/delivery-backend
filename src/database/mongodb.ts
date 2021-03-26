const mongoose = require('mongoose')

class MongoDB {
    static connect() {
        mongoose.connect(String(process.env.MONGO_URI), {
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