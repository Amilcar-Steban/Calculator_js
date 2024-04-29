const express = require('express'); const path = require('path');
const app = express();
const mysql = require('mysql');
app.use(express.json());
app.use(express.static(path.join( __dirname, 'public')));
app.use(express.static(path.join( __dirname, '')));
app.use('/index.js', express.static(path.join(__dirname, 'index.js')));

// Crea una conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'calculator',
    password: 'pass123.',
    database: 'calculator_db'
});

// Conéctate a la base de datos
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Crea una ruta API para obtener el historial de la calculadora
app.get('/api/history', (req, res) => {
  const sql = 'SELECT * FROM calculator_history ORDER BY timestamp DESC';
  db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
  });
});

app.post('/api/save', (req, res) => {
  const { operation, result } = req.body;
  const sql = 'INSERT INTO calculator_history (operation, result) VALUES (?, ?)';
  db.query(sql, [operation, result], (err, results) => {
      if (err) throw err;
      res.json({ message: 'Operation and result saved to the database' });
  });
});

app.listen(3675, () => {
  console.log('Server is running on port 3675');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
