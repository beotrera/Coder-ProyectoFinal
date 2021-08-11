import express from "express";
import Cart from './cart.js';

const route = express.Router()

const cart = new Cart()

route.get("/list", async (req, res) => {
    let list = await cart.getProdcuts()
    if(!list[0]){
        return res.status(404).json({menssage:"empty cart list"})
    }
    res.status(200).json(list)
})

route.get("/list/:id",async (req, res) => {
    let { id } = req.params
    let item = cart.getProductById(id)
    if(!item[0]){
        return res.status(404).json({menssage:"product not found"})
    }
    res.status(200).json(item[0])
})

route.put("/save/:id",async (req, res) => {
    let { id } = req.params
    let item = await cart.setProduct(id)
    if(!item){
        return res.status(404).json({menssage:"product not found"})
    }
    res.status(200).json(item)
})

route.delete("/delete/:id",async (req, res) => {
    let { id } = req.params
    let prod = cart.deleteProduct(id)
    res.json(prod)
})

export default route