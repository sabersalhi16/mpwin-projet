import { cleanEnv, num, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_URI: str(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),
    POSTGRES_PASSWORD: str(),
    POSTGRES_PORT: num(),
    POSTGRES_USER: str(),
    POSTGRES_HOST: str(),
    POSTGRES_DB: str(),
    PORT: num(),
  });
}

export default validateEnv;
