import express from 'express';
import { CartDAO } from '../../db/dao/cart.js';
import logger from '../../helper/logger.js';
import { sendEmailOrder } from '../../lib/nodemailer/index.js'


const route = express.Router() 

route.get('/list', async (req, res) => {
    try{
        let list = await CartDAO.getCarts()
        if(!list[0]){
            return res.status(404).json({menssage:'empty cart list'})
        }
        res.status(200).json(list)
    }
    catch(err){
        logger.error(err)
    }
})

route.get('/list/:id',async (req, res) => {
    try{
        let { id } = req.params
        let item = await CartDAO.getCartById(id)

        if(!item._id){
            return res.status(404).json({menssage:'cart not found'})
        }
        res.status(200).json(item)
    }
    catch(err){
        logger.error(err)
    }
    
})

route.put('/save/:id',async (req, res) => {
    try{
        let { id } = req.params
        let item = await CartDAO.setCart(id)
        if(!item){
            return res.status(404).json({menssage:'product not found'})
        }
        res.status(200).json(item)
    }
    catch(err){
        logger.error(err)
    }
    
})

route.put('/update/:id',async (req, res) => {
    try{
        let { id } = req.params
        let { product } = req.query
        let item = await CartDAO.addToCart(id,product)
        if(!item){
            return res.status(404).json({menssage:'product not found'})
        }
        res.status(200).json(item)
    }
    catch(err){
        logger.error(err)
    }
})

route.delete('/delete/:id',async (req, res) => {
    try{
        let { id } = req.params
        let prod = CartDAO.deleteCart(id)
        res.json(prod)
    }
    catch(err){
        logger.error(err)
    }
})

route.delete('/deleteProduct/:id',async (req, res) => {
    try{
        let { id } = req.params
        let { product } = req.query
        let prod = CartDAO.deleteCartProduct(id,product)
        res.json(prod)
    }
    catch(err){
        logger.error(err)
    }
    
})

route.post('/send',async (req, res) => {
    try{
        sendEmailOrder(req.body.html);
        res.send(200).json({success:true})
    }
    catch(err){
        logger.error(err)
    }
    
})

export default route