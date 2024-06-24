const express = require('express')
const app = express()
const PORT = 3000
const quranRouter = require('./routes/quran');
const SurahRouter = require('./routes/surah');


app.use(express.json());

// Mount the Quran router at /quran
app.use('/api/quran', quranRouter);


app.use('/api/surah', SurahRouter);


app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})