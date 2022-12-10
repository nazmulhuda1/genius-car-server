const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middelwares
app.use(cors());
app.use(express.json())


// ======
console.log(process.env.DB_USER1)
console.log(process.env.DB_PASSWORD1)


// --------------------
const uri = `mongodb+srv://${process.env.DB_USER1}:${process.env.DB_PASSWORD1}@cluster0.exe7q4w.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});




// ------
app.get('/', (req, res) => {
    res.send('genius car server is runing')
});
app.listen(port, () => {
    console.log(`genius car server on ${port}`)
})