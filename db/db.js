import pg from 'pg';

export default new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_express_db',
  password: 'postgres',
  port: 5432
});
