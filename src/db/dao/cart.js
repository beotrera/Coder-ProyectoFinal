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

    async deleteProduct(id){
        try{
            const res = await CartModel.findOneAndRemove({_id:id})
            return res
        }
        catch(err){
            console.log(err)
        }
    }
}


export const CartDAO = new Cart()
