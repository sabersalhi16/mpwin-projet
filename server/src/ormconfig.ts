import { ConnectionOptions } from "typeorm";
import UserEntity from "./user/user.entity";
import AuthorityEntity from "./authorities/authoritie.entity";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "mpwin",
  entities: [UserEntity, AuthorityEntity],
  synchronize: true,
  cli: {
    migrationsDir: "src/migrations",
  },
};

export default config;
