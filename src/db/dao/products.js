import ProdcutsModel from '../models/products.js'

class Products{

    async getProdcuts(){
        try{
            const res = await ProdcutsModel.find({})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async getProductById(id){
        try{
            const res = await ProdcutsModel.findOne({_id:id})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async setProduct(data){
        try{
            let product = new ProdcutsModel()
            
            product.name = data.name
            product.description = data.description
            product.code = data.code
            product.price = parseInt(data.price)
            product.stock = parseInt(data.stock)
            product.url = data.url
            
            const res = await product.save()
            return res

        }
        catch(err){
            console.log(err)
        }    
    }

    async updateProduct(id,data){
        try{
            const array = await MeetupsMod.find({_id:id})
            const res = MeetupsMod.findOneAndUpdate({_id:id},{data})
            return res
        }
        catch(err){
            console.log(err)
        }    
    }

    async deleteProduct(id){
        try{
            const res = await ProdcutsModel.findOneAndRemove({_id:id})
            return res
    
        }
        catch(err){
            console.log(err)
        }
    }

    getFilters(){
    }
}

export const ProductsDAO = new Products()
