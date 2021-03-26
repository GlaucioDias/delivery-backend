"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const MONGO_URI = String(process.env.MONGO_URI);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
class MongoDB {
    static connect() {
        mongoose.connect('mongodb+srv://glaucio:qwe123@omnistack-mux5o.mongodb.net/delivery?authSource=admin&replicaSet=omnistack-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', options, function (error) {
            if (!error)
                return;
            console.log('Connection failure', error);
        });
        const connection = mongoose.connection;
        connection.once('open', () => console.log('Database running!'));
        return connection;
    }
}
exports.default = MongoDB;
//# sourceMappingURL=mongodb.js.map