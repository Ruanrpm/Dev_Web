import { DataSource } from "typeorm";
import path from "node:path";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Doker",
    database: "apivendas",
    synchronize: false,
    logging: true,
    entities: [],
    migrations: [path.join(__dirname, "migrations", "*.ts")]
})