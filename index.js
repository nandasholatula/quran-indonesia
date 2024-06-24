const express = require('express')
const app = express()
const port = 8081
const quranRouter = require('./routes/quran');

app.use(express.json());

// Mount the Quran router at /quran
app.use('/api/quran', quranRouter);

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})