// app.js (or server.js)
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// For all requests that do not match a static asset, serve the index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
