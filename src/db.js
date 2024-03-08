import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'lavadero',
  port: 3307
});

connection.connect(err => {
  if (err) {
    console.error('Connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the identifier' + connection.threadId);
});

export default connection;