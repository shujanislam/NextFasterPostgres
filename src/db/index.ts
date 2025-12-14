// import * as schema from "./schema";
// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
//
// const sql = neon(
//   "postgresql://neondb_owner:npg_A6mkNxw3uiZn@ep-dark-water-ahidvgxk-pooler.c-3.us-east-1.aws.neon.tech/neondb",
// );
// export const db = drizzle({ client: sql, schema });
//

import { Pool } from 'pg';

const pool = new Pool({
  user: 'shujan',
  host: 'localhost',
  database: 'nextfaster',
  password: 'shujan@786',
  port: 5432,
});

pool.on('connect', ()=>{
  console.log('pool working');
});

pool.on('error', (err)=>{
  console.log(err.message);
})

export default pool;
