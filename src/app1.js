
const express = require('express'); const path = require('path');
const app = express();
const mysql = require('mysql');
app.use(express.json());
app.use(express.static(path.join( __dirname, 'public')));
app.use(express.static(path.join( __dirname, '')));
app.use('/index.js', express.static(path.join(__dirname, 'index.js')));

app.listen(3675, () => {
    console.log('Server is running on port 3675');
  });
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  