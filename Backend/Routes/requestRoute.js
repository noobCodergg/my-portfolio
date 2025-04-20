const express = require("express");
const { postRequest, updateStatus } = require("../Controllers/requestController");
const { verifyToken} =require('../Middlewares/authMiddleware')


const router = express.Router();

router.post('/postrequest',postRequest)
router.put('/updatestatus/:requestId',verifyToken,updateStatus)

module.exports = router;