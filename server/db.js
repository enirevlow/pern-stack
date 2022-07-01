const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "joyfoo",
//   password: "",
//   host: "localhost",
//   port: 5432,
//   database: "perntodo",
// });

const pool = new Pool({
  // create connection to database
  connectionString: process.env.DATABASE_URL, // use DATABASE_URL environment variable from Heroku app
  ssl: {
    rejectUnauthorized: false, // don't check for SSL cert
  },
});

module.exports = pool;
