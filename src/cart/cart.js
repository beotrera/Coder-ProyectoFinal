import { productClass } from '../products/products.js';
import fs from 'fs'
export const product = productClass

export default class Cart{
    constructor(){
        this.carts = []
        this.id = 1
    }

    getProdcuts(){
        try{
            return this.carts
        }
        catch(err){
            console.log(err)
        }
    }

    getProductById(id){
        try{
            const cart = this.carts.filter( x =>{
                if(x.id == id)
                { return x }
            })

            return cart
        }
        catch(err){
            console.log(err)
        }
    }

    async setProduct(id){
        try{
            let item = await product.getProductById(id)

            let obj ={
                id:this.id,
                timestamp:new Date(),
                product:item
            }
            
            this.id ++
            this.carts.push(obj)
            fs.promises.appendFile("carts.txt", JSON.stringify(obj)+"\n")
            
            return obj
        }
        catch(err){
            console.log(err)
        }    
    }

    deleteProduct(id){
        try{
            const cart = this.carts.find(
                x =>{
                    if(x.id == id) return x 
                }
            )
            const carts = this.carts.filter( x =>{
                if(x.id != id) return x 
            })

            this.carts = carts
            
            return cart
        }
        catch(err){
            console.log(err)
        }
    }
}