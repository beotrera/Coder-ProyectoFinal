import Products from './src/products/products.api.js'
import Cart from './src/cart/cart.api.js'
import express from 'express'

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
});