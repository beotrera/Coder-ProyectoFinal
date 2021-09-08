import ProdcutsModel from '../models/products.js'

class Products{

    async getProdcuts(filter,value){
        try{
            if(filter && value && value != ''){
                const mongoFilter = this.getFilter(filter,value)
                const res = await ProdcutsModel.find(mongoFilter)
                return res    
            }
            const res = await ProdcutsModel.find({})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    getFilter(a,b){
        const elements ={
            "name":{name:{ $eq: b }},
            "code":{code:{ $eq: b }},
        }

        return elements[a]
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
            product.category = data.category
            
           const res = await product.save()

           return res

        }
        catch(err){
            console.log("err to created")
        }    
    }

    async updateProduct(id,data){
        try{
            const res = ProdcutsModel.findOneAndUpdate({_id:id},{data})
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

}

export const ProductsDAO = new Products()
