// routes/quran.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Endpoint to retrieve specific fields from data
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../data/quran.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('An error occurred while reading the file.');
            return;
        }
        try {
            const jsonData = JSON.parse(data);

            // Assuming jsonData is an array with a single object as per your example
            const firstObject = jsonData[0];

            if (!firstObject) {
                res.status(404).send('Data not found.');
                return;
            }

            
            const baseUrl = 'http://localhost:8081/api/surah/';

            const surahs = jsonData.map((surah) => {
                const {
                    number,
                    numberOfAyahs,
                    name,
                    translation,
                    revelation,
                    description,
                    audio
                } = surah;

                return {
                    number,
                    numberOfAyahs,
                    name,
                    translation,
                    revelation,
                    description,
                    audio,
                    url: `${baseUrl}${number}`
                };
            });


            res.json(surahs);
        } catch (err) {
            console.error('Error parsing JSON:', err);
            res.status(500).send('An error occurred while parsing the file.');
        }
    });
});

module.exports = router;
