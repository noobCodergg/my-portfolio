const express = require("express");

const {login,verify, logout} =require ('../Controllers/adminController')


const router = express.Router();

router.post('/login',login)
router.get('/verify',verify)
router.post('/logout',logout)

module.exports = router;