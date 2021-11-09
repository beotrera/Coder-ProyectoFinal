import express from 'express';
import { CartDAO } from '../../db/dao/cart.js';

const route = express.Router() 

route.get('/list', async (req, res) => {
    let list = await CartDAO.getCarts()
    if(!list[0]){
        return res.status(404).json({menssage:'empty cart list'})
    }
    res.status(200).json(list)
})

route.get('/list/:id',async (req, res) => {
    let { id } = req.params
    let item = await CartDAO.getCartById(id)

    if(!item._id){
        return res.status(404).json({menssage:'cart not found'})
    }
    res.status(200).json(item)
})

route.put('/save/:id',async (req, res) => {
    let { id } = req.params
    let item = await CartDAO.setCart(id)
    if(!item){
        return res.status(404).json({menssage:'product not found'})
    }
    res.status(200).json(item)
})

route.put('/update/:id',async (req, res) => {
    let { id } = req.params
    let { product } = req.query
    let item = await CartDAO.addToCart(id,product)
    if(!item){
        return res.status(404).json({menssage:'product not found'})
    }
    res.status(200).json(item)
})

route.delete('/delete/:id',async (req, res) => {
    let { id } = req.params
    let prod = CartDAO.deleteCart(id)
    res.json(prod)
})

route.delete('/deleteProduct/:id',async (req, res) => {
    let { id } = req.params
    let { product } = req.query
    let prod = CartDAO.deleteCartProduct(id,product)
    res.json(prod)
})

export default route