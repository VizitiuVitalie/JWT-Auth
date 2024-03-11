import pg from "pg";
const { Pool } = pg;

let localPoolConfig = {
  user: "postgres",
  password: "your db password",
  host: "localhost",
  port: "5432",
  database: "jwtguide",
};

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    }
  : localPoolConfig;

const pool = new Pool(poolConfig);

export default pool;
