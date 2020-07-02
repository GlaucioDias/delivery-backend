// const MongoClient = require('../database/mongodb')
const { MongoClient } = require('mongodb')

describe('MongoDB Suite de testes', () => {
    let connection;
    let db;

    beforeAll(async () => {
        console.log('global.__MONGO_URI__', global.__MONGO_URI__)
        console.log('global.__MONGO_DB_NAME__', global.__MONGO_DB_NAME__)
        connection = await MongoClient.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
        });
        db = await connection.db(global.__MONGO_DB_NAME__)
    })
    afterAll(async () => {
        await connection.close()
        await db.close()
    })
    it('Should insert a doc into collection', async () => {
        const products = db.collection('products');
        const mockProduct = {
            "name": "Provolone",
            "description": "Provolone e orégano",
            "price": "20.99"
        };
        await products.insertOne(mockProduct);
        const insertedProduct = await products.findOne({ name: 'Provolone' });
        expect(insertedProduct).toEqual(mockProduct)
    })
})