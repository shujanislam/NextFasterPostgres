import { Pool } from "pg";

const pool = new Pool({
  user: "shujan",
  host: "localhost",
  database: "nextfaster",
  password: "shujan@786",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  keepAlive: true,
});

pool.on("connect", () => {
  // console.log('pool working');
});

pool.on("error", (err) => {
  console.log(err.message);
});

export default pool;
