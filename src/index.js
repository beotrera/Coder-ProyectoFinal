import Products from './products/products.api.js'
import Cart from './cart/cart.api.js'
import express from 'express'
import { connectToDatabase } from './db/index.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 8080;

app.use(express.static('./public'));

app.use('/products',Products)
app.use('/cart',Cart)

app.use((req, res) => {
    res.status(404).json({ error :"not found", descripcion:`the specific path ${req.url} is not implemented`});
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    connectToDatabase()
    .then(result =>{
        console.log('Mongo ready')
    })
    .catch(err=>{
        console.log(`Error to connect : ${err}`)
    })
});