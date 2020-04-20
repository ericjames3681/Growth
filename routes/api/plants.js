const express = require("express");
const router = express.Router();
const plantsCtrl = require("../../controllers/plants");


router.use(require("../../config/auth"));
router.post("/", checkAuth, plantsCtrl.create);
router.get("/", checkAuth, plantsCtrl.index);
router.delete("/:id", checkAuth, plantsCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
