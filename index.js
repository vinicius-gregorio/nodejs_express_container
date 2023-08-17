const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const conn = mysql.createConnection(config);

const sqlInsert = `INSERT INTO people(name) values('PIPO')`;

conn.query(sqlInsert);
conn.end();
app.get("/", (req, res) => {
  res.send("<h1>Docker Container</h1>");
});

app.listen(port, () => {
  console.log(`Running on port ${port} 🚀🚀`);
});
