// routes/quran.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const surahData = path.join(__dirname, '../data/quran.json');

// Endpoint to retrieve specific fields from data
router.get('/:number/:ayahNumber', (req, res) => {
    const surahNumber = req.params.number;
    const ayahNumber = req.params.ayahNumber;

    // Example: Fetch ayah data from your data source
    const surah = surahData.find(surah => surah.number === parseInt(surahNumber));

    if (!surah) {
        return res.status(404).json({ error: 'Surah not found' });
    }

    const ayah = surah.ayahs.find(ayah => ayah.number.inSurah === parseInt(ayahNumber));

    if (!ayah) {
        return res.status(404).json({ error: 'Ayah not found' });
    }

    res.json(ayah); // Respond with the ayah data
});


module.exports = router;
