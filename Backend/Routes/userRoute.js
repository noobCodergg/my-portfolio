const express = require("express");
const { createUser, checkUser, getJoinedRequestUserData, getUsers } = require("../Controllers/userController");
const {verifyToken} =require('../Middlewares/authMiddleware')

const router = express.Router();

router.post('/postuser',createUser)
router.get('/checkuser/:phone',checkUser)
router.get('/getjoineduserdata',verifyToken,getJoinedRequestUserData)
router.get('/getusers',verifyToken,getUsers)

module.exports = router;