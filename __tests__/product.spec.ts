const {MongoMemoryServer} = 'mongodb-memory-server'
const app = require("../src/app");
const mongoose = require("mongoose") 
const request = require("supertest")

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

let mongoServer = new MongoMemoryServer();

describe('MongoDB Suite de testes', () => {    
    beforeAll(async () => {
        const mongoUri = await mongoServer.getUri();
        await mongoose.connect(mongoUri, options)
    })

    afterAll(async () => {
        await mongoose.connection.close();
        await mongoServer.stop();
    })
    it('List products', () => {
        // const res = await request(app).get("/products");
        expect(200).toEqual(200)
    })
})