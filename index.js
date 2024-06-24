const express = require('express')
const app = express()
const PORT = 8080
const quranRouter = require('./routes/quran');

app.use(express.json());

// Mount the Quran router at /quran
app.use('/api/quran', quranRouter);


app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})