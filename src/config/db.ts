const mysql =require( 'mysql2/promise');
const dotenv =require( 'dotenv');

dotenv.config();

// database connection
export const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'vehicle_db',
});