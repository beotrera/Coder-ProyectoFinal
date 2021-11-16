import express from 'express';
import { CartDAO } from '../../db/dao/cart.js';
import logger from '../../helper/logger.js';
import { sendEmailOrder } from '../../lib/nodemailer/index.js'
import sendMsm from '../../lib/twilio/index.js'

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

route.get('/list/user',async (req, res) => {
    try{
        let { email } = req.user
        let item = await CartDAO.getCartById(email)

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
        let { email } = req.user
        let item = await CartDAO.setCart(id,email)
        if(!item){
            return res.status(404).json({menssage:'product not found'})
        }
        res.status(200).json(item)
    }
    catch(err){
        logger.error(err)
    }
    
})

route.put('/update',async (req, res) => {
    try{
        let { product } = req.query
        let { email } = req.user 
        let item = await CartDAO.addToCart(email,product)
        if(!item){
            return res.status(404).json({menssage:'product not found'})
        }
        res.status(200).json(item)
    }
    catch(err){
        logger.error(err)
    }
})

route.delete('/delete',async (req, res) => {
    try{
        let { email } = req.user 
        let prod = CartDAO.deleteCart(email)
        res.json(prod)
    }
    catch(err){
        logger.error(err)
    }
})

route.delete('/deleteProduct',async (req, res) => {
    try{
        let { email } = req.user 
        let { product } = req.query
        let prod = CartDAO.deleteCartProduct(email,product)
        res.json(prod)
    }
    catch(err){
        logger.error(err)
    }
    
})

route.post('/send',async (req, res) => {
    try{
        sendMsm('New order was created',req.user.phone);
        sendEmailOrder(req.body.html);
        res.send(200).json({success:true})
    }
    catch(err){
        logger.error(err)
    }
    
})

export default route