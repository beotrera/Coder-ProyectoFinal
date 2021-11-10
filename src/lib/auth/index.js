const isAuth =(req,res,next)=>{
    if (req.isAuthenticated()) {
        next();
      } else {
        res.status(403).render("login");
      }
}

export default isAuth