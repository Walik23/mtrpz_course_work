const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serving static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});