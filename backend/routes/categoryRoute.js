const express = require('express');
const { getCategory } = require('../services/categoryServices');

const router = express.Router();

router.post('/', getCategory);

module.exports = router;
