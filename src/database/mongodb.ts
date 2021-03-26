const mongoose = require('mongoose')

const MONGO_URI = String(process.env.MONGO_URI)



const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

class MongoDB {
    

    static connect() {
        mongoose.connect('mongodb+srv://glaucio:qwe123@omnistack-mux5o.mongodb.net/delivery?authSource=admin&replicaSet=omnistack-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', options, function (error: any) {
            if (!error) return
            console.log('Connection failure', error)
        })
        const connection = mongoose.connection
        connection.once('open', () => console.log('Database running!'))
        return connection
    }
}
export default MongoDB