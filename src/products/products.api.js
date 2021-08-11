import express from "express";
import { productClass } from './products.js';
import { isAdmin } from "../auth/auth.js"

const route = express.Router()

export const product = productClass

route.get("/list", async (req, res) => {
    let list = await product.getProdcuts()
    if(!list[0]){
        return res.status(404).json({menssage:"empty product list"})
    }
    res.status(200).json(list)
})

route.get("/list/:id", async (req, res) => {
    let { id } = req.params
    let item = await product.getProductById(id)
    if(!item[0]){
        return res.status(404).json({menssage:"product not found"})
    }
    res.status(200).json(item[0])
})

route.post("/save", isAdmin, async (req, res) => {
    let data = req.body
    let prod = product.setProduct(data)
    res.json(prod)
})

route.put("/update/:id", isAdmin, async (req, res) => {
    let { id } = req.params
    let data = req.body
    res.json(product.updateProduct(id,data))
})

route.delete("/delete/:id", isAdmin, async (req, res) => {
    let { id } = req.params
    let prod = await product.deleteProduct(id)

    if(!prod){
        return res.status(404).json({menssage:"product not found"})
    }
    res.json(prod)
})

export default route