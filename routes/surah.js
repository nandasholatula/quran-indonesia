// routes/quran.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Endpoint to retrieve specific fields from data
router.get('/:id', (req, res) => {
    res.json({ message: 'Quran data endpoint' });
});


module.exports = router;
