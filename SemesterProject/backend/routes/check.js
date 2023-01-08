const express = require('express');
const router = express.Router();
const checkController = require('../controllers/check');

router.route('/check').get(checkController);


module.exports = router;