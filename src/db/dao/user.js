import UserModel from '../models/user.js'

class User{

    async getUsers(){
        try{
            const res = await UserModel.find({})
            return res
        }
        catch(err){
            console.log(err)
        }
    }

    async setProduct(data){
        try{
            let user = new UserModel()
            
            user.name = data.name
            user.year = data.year
            user.addres = data.addres
            user.email = data.email
            user.password = data.password
            user.phone = data.phone
            
           const res = await user.save()

           return res

        }
        catch(err){
            console.log("err to created")
        }    
    }

}

export const UserDAO = new User()
