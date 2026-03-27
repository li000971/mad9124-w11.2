import postgres from "postgres";
import "dotenv/config";

const sql = postgres(process.env.DATABASE_URL);

(async () => {
  console.log(process.env.DATABASE_URL);
  const results = await sql`SELECT * FROM employees`;
  console.log(results);
})();

export default sql;
