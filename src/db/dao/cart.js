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

    async getCartById(user){
        try{
            const res = await CartModel.findOne({user:user})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async getCartByUser(user){
        try{
            const res = await CartModel.findOne({user:user})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async setCart(id,user){
        try{
            let item = await ProductsDAO.getProductById(id)

            if(!item.id) return { menssage: "produc dont found" }

            const productCart = new CartModel()
            productCart.products = item
            productCart.user = user

            const res = productCart.save()

            return res
        }
        catch(err){
            console.log(err)
        }    
    }

    async addToCart(user, prod){

        let item = await ProductsDAO.getProductById(prod)
        const res = await CartModel.findOneAndUpdate({user:user},{ $push : {products : item}})
        
        return res

    }

    async deleteCart(user){
        try{
            const res = await CartModel.findOneAndRemove({user:user})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async deleteCartProduct(user,prod){
        try{
            const data = await CartModel.find({user:user})
            const array = data[0].products.filter( (item)=>{ if(item._id != prod) return item} )
            const res = await CartModel.findOneAndUpdate({user:user},{ products : array})
            return res
        }
        catch(err){
            console.log(err)
        }
    }
}


export const CartDAO = new Cart()
