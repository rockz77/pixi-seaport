const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
