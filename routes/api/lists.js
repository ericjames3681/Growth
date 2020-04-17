const express = require("express");
const router = express.Router();
const plantsCtrl = require("../../controllers/plants");

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// will check to see if req.user is defined. if true, it will send to controllers below
router.use(require("../../config/auth"));
router.post("/garden", checkAuth, plantsCtrl.create);
router.get("/garden", checkAuth, plantsCtrl.index);
router.delete("/garden/:id", checkAuth, plantsCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
