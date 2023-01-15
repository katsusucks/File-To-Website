const express = require('express');
const fs = require('fs');
const app = express();

app.get('/file', (req, res) => {
  fs.readFile('FOLDER_NAME.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    res.send(`<div id="file-contents">${data}</div>`);
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
