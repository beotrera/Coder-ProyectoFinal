import Products from './components/products/products.api.js'
import Cart from './components/cart/cart.api.js'
import User from './lib/passport/index.js'
import express from 'express'
import { connectToDatabase } from './lib/mongodb/index.js'
import session from 'express-session'
import passport from 'passport'
import isAuth from './lib/auth/index.js'

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 8080;
app.set('view engine', 'hbs');
app.set('views','./public');
app.use(express.static('./public'));
app.use(
    session({
            secret: process.env.SECRET || 'thisIsaSecret',
            resave:false,
            saveUninitialized:false
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/products',isAuth,Products)
app.use('/cart',isAuth,Cart)
app.use('/user',User)
app.use('/login',(req,res)=>{
    res.render('login')
})
app.use('/register',(req,res)=>{
    res.render('register')
})
app.use('/home',isAuth,(req,res)=>{
    res.render('home')
})
app.use('/cart',isAuth,(req,res)=>{
    res.render('cart')
})
app.use('/addproducts',isAuth,(req,res)=>{
    res.render('addProducts')
})

app.use((req, res) => {
    res.status(404).json({ error :'not found', descripcion:`the specific path ${req.url} is not implemented`});
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