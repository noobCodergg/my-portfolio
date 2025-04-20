const express = require("express");
const { uploadProject, getProjects, getProjectById } = require("../Controllers/projectController");
const {verifyToken} = require('../Middlewares/authMiddleware')
const router = express.Router();

router.post('/postproject',verifyToken,uploadProject)
router.get('/getprojects',getProjects)
router.get('/getprojectbyid/:projectId',getProjectById)


module.exports = router;