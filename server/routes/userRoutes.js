const express = require("express");
const { createUser } = require('../controllers/userController');

const router = express.Router();

router.get('/create', createUser)

module.exports = router