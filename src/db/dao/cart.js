import CartModel from '../models/cart.js'
import { ProductsDAO } from '../dao/products.js'

class Cart{

    async getCarts(){
        try{
            const res = await CartModel.find({})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async getCartById(id){
        try{
            const res = await CartModel.findOne({_id:id})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async setCart(id){
        try{
            let item = await ProductsDAO.getProductById(id)

            if(!item.id) return { menssage: "produc dont found" }

            const productCart = new CartModel()
            productCart.products = item

            const res = productCart.save()

            return res
        }
        catch(err){
            console.log(err)
        }    
    }

    async addToCart(id, prod){

        let item = await ProductsDAO.getProductById(prod)
        const res = await CartModel.findOneAndUpdate({_id:id},{ $push : {products : item}})
        
        return res

    }

    async deleteCart(id){
        try{
            const res = await CartModel.findOneAndRemove({_id:id})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async deleteCartProduct(id,prod){
        try{
            const data = await CartModel.find({_id:id})
            const array = data[0].products.filter( (item)=>{ if(item._id != prod) return item} )
            const res = await CartModel.findOneAndUpdate({_id:id},{ products : array})
            return res
        }
        catch(err){
            console.log(err)
        }
    }
}


export const CartDAO = new Cart()
