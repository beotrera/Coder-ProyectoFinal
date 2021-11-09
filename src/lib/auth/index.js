export const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(401).render("login");
    }
};

export const authRender = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render("home");
  } else {
    next();
  }
};

