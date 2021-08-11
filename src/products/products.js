import fs from 'fs'

class Products{
    constructor(){
        this.products = []
        this.id = 1
    }

    getProdcuts(){
        try{
            return this.products
        }
        catch(err){
            console.log(err)
        }
    }

    getProductById(id){
        try{
            const product = this.products.filter( x =>{
                if(x.id == id)
                { return x }
            })
            if(product.length === 0){
                return {Error:"product not found"}
            }
            
            return product
        }
        catch(err){
            console.log(err)
        }
    }

    setProduct(data){
        try{
            let obj ={
                id:this.id,
                timestamp:new Date(),
                name:data.name,
                description:data.description,
                code:data.code,
                price:data.price,
                stock:data.stock,
                url:data.url
            }
            
            this.id ++
            this.products.push(obj)
            fs.promises.appendFile("products.txt", JSON.stringify(obj)+"\n")

            return obj
        }
        catch(err){
            console.log(err)
        }    
    }

    updateProduct(id,data){
        try{
            let obj = {
                id:parseInt(id),
                timestamp:new Date(),
                name:data.name,
                description:data.description,
                code:data.code,
                price:data.price,
                stock:data.stock,
                url:data.url
            }

            for(let x = 0;x < this.products.length;x ++){
                    if(this.products[x].id === parseInt(id)){
                        this.products[x] = obj
                    }
                }
            return obj
        }
        catch(err){
            console.log(err)
        }    
    }

    deleteProduct(id){
        try{
            const product = this.products.find(
                x =>{
                    if(x.id == id)
                    { return x }
                }
            )

            if(product){
                const list = this.products.filter( x =>{
                    if(x.id != id)
                    { return x }
                })
                this.products = list
            }
                        
            return product
        }
        catch(err){
            console.log(err)
        }
    }
}

export const productClass = new Products()