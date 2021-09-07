import express from "express";
import { ProductsDAO } from '../db/dao/products.js'
import { productClass } from './products.js';

const route = express.Router()

export const product = productClass

route.get("/list", async (req, res) => {
    let list = await ProductsDAO.getProdcuts();
    if(!list[0]){
        return res.status(404).json({menssage:"empty product list"})
    }
    res.status(200).json(list)
})

route.get("/list/:id", async (req, res) => {
    let { id } = req.params
    let item = await ProductsDAO.getProductById(id)
    console.log(item)
    if(!item){
        return res.status(404).json({menssage:"product not found"})
    }
    res.status(200).json(item)
})

route.post("/save", async (req, res) => {
    let data = req.body
    let prod = ProductsDAO.setProduct(data)
    res.json(prod)
})

route.put("/update/:id", async (req, res) => {
    let { id } = req.params
    let data = req.body
    let item = await ProductsDAO.updateProduct((id,data))
    res.json(item)
})

route.delete("/delete/:id", async (req, res) => {
    let { id } = req.params
    let item = await ProductsDAO.deleteProduct(id)

    if(!item){
        return res.status(404).json({menssage:"product not found"})
    }
    res.json(item)
})

export default route