const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "notes",
  password: "Qq$736860530",
  port: 5432,
});
module.exports = pool;
