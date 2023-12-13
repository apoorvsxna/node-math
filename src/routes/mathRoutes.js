const express = require('express');
const mathController = require('../controllers/mathController');

const router = express.Router();

router.post('/addition', mathController.addition);
router.get('/fibonacci/:n', mathController.fibonacci);
router.get('/factorial/:num', mathController.factorial);

module.exports = router;
