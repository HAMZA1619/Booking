const router = require("express").Router()

const  { register, login } = require("../controller/userController")


router.post("/register/:role", register);
router.post("/login", login);

module.exports = router;