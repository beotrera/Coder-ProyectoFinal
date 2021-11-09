import passport from 'passport';
import passport_local from 'passport-local'
import userModel  from '../../db/models/user.js'
import express from 'express';
import { sendEmailRegister } from '../nodemailer/index.js';
const route = express.Router()
const LocalStrategy = passport_local.Strategy

passport.use('local-register',new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password', 
    passReqToCallback:true },async (req, name, password, done)=>{
        try{
            console.log(req.body)
            const findUser = await userModel.findOne({name:name})
            if(findUser){
                console.log('user is in used')
                return done(null,false,{menssage:'user is in used'})
            }else{
                const user = await new userModel();
                user.name = name;
                user.password = user.encryptPassword(password);
                user.email = req.body.email;
                user.year = req.body.year;
                user.addres = req.body.addres;
                user.phone = req.body.phone;
                
                await user.save()   
                return done(null,user);
            }
        }
        catch(err){
            console.log(err)
            return done(null,false,{error:err});
        }
    })
);
passport.use('local-login',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password', 
    passReqToCallback:true },async (req, email, password, done)=>{
        try{
            const user = await userModel.findOne({email: req.body.email});

            if(!user){
                console.log('user not found')
                return done(null,false,console.log('user not found'))
            }

            if(!await user.comparePassword(password, user.password)){
                console.log('user or password is incorret')
                return done(null,false,console.log('user or password is incorret'))
            }else{
                done(null,user)
            }
        }
        catch(err){
            console.log(err)
            done(null,err);
        }
    })
);

passport.serializeUser( (user, done)=>{
    done(null, user.id);
});

passport.deserializeUser( async(id, done)=>{
    try{
        const user = await userModel.findById(id);
        done(null, user);
        
    }
    catch(err){
        done(null,false,{error:err});
    }
});



route.post('/register',passport.authenticate('local-register',{ successRedirect:'/user/register',failureRedirect:'/user/register',passReqToCallback:true }))
route.get('/register', (req,res)=>{
    if(!req.user){
        return res.status(400).json({succes:false})
    }
    sendEmailRegister(req.user)
    res.status(200).json({succes:true})
})

route.post('/login',passport.authenticate('local-login', { successRedirect:'/user/login',failureRedirect:'/user/login',passReqToCallback:true }))

route.get('/login', (req,res)=>{
    if(!req.user){
        console.log("test")
        return res.status(400).send({success:false})
    }
    res.status(200).send({success:true})
})

route.get('/logout', async (req, res) => {
    req.session.destroy( err =>{
        if(!err) return res.clearCookie('user').status(200).send({error:false})
        else res.status(404).send({error:true,menssage:'error logout',body:err})
    })
})

route.post('/test',(req,res)=>{
    console.log(req.body)
    res.send({test:'succes'})
})




  



export default route