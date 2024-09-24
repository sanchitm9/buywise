import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "root",
  database:"reviews"
})
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err.message);
    return;
  }
  console.log('Connected to MySQL database successfully!');
});

// Optional: Add an error event listener for unexpected disconnections
db.on('error', (err) => {
  console.error('Database error:', err.message);
});