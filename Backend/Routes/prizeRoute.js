const express = require("express");
const { postPrize, getPrize, updatePrize } = require("../Controllers/prizeController");
const {verifyToken} =require('../Middlewares/authMiddleware')
const router = express.Router();

router.post('/postprize',verifyToken,postPrize)
router.get('/getprize',getPrize)
router.put('/updatestatus/:id',verifyToken,updatePrize)

module.exports = router;