import express from 'express';
import { ProductsDAO } from '../../db/dao/products.js'
import logger from '../../helper/logger.js'

const route = express.Router()

route.get('/list', async (req, res) => {
    try{
        const { filter , value} = req.query;
        let list = await ProductsDAO.getProdcuts(filter, value);
        res.status(200).json(list)
    }
    catch(err){
        logger.error(err)
    }
})

route.get('/list/:id', async (req, res) => {
    try{
        let { id } = req.params
        let item = await ProductsDAO.getProductById(id)
        console.log(item)
        if(!item){
            return res.status(404).json({menssage:'product not found'})
        }
        res.status(200).json(item)
    }
    catch(err){
        logger.error(err)
    }
})

route.post('/save', async (req, res) => {
    try{
        let data = req.body
        let prod = await ProductsDAO.setProduct(data)
        if(!prod){
            return res.status(404).json({menssage:'error to create product'})
        }
        res.json(prod)
    }
    catch(err){
        logger.error(err)
    }
})

route.put('/update/:id', async (req, res) => {
    try{
        let { id } = req.params
        let data = req.body
        let item = await ProductsDAO.updateProduct((id,data))
        res.json(item)
    }
    catch(err){
        logger.error(err)
    }
})

route.delete('/delete/:id', async (req, res) => {
    try{
        let { id } = req.params
        let item = await ProductsDAO.deleteProduct(id)
        if(!item){
            return res.status(404).json({menssage:'product not found'})
        }
        res.json(item)
    }
    catch(err){
        logger.error(err)
    }
})

export default route