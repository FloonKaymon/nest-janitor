import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  logging: true,
  synchronize: true,
  entities: [`${__dirname}/../**/entities/*.js`],
  migrations: [`${__dirname}/migrations/*.js`],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
