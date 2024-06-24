const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const surahDataPath = path.join(__dirname, '../data/quran.json');
const surahData = JSON.parse(fs.readFileSync(surahDataPath, 'utf8'));

// Endpoint to retrieve specific ayah from data
router.get('/:number/:ayahNumber', (req, res) => {
    const surahNumber = req.params.number;
    const ayahNumber = req.params.ayahNumber;

    // Find the surah in the surahData array
    const surah = surahData.find(surah => surah.number === parseInt(surahNumber));

    if (!surah) {
        return res.status(404).json({ error: 'Surah not found' });
    }

    // Find the ayah within the found surah
    const ayah = surah.ayahs.find(ayah => ayah.number.inSurah === parseInt(ayahNumber));

    if (!ayah) {
        return res.status(404).json({ error: 'Ayah not found' });
    }

    res.json(ayah); // Respond with the ayah data
});

module.exports = router;
