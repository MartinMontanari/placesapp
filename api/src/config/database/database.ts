import {createPool} from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: process.env.DB_HOST || 'mysql',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'secret',
        database: process.env.DB_NAME || 'placesapp',
        connectionLimit: 10,
    });
    console.log('Connection with database successfully established');
    return connection;
}