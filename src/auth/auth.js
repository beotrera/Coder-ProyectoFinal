export const isAdmin=(req,res,next)=>{
    const { admin } = req.query
    if(!admin){
        return res.status(403).json({ error:403,menssage:"permissions denied"})
    }
    next()
}