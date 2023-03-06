import * as dotenv from "dotenv";

dotenv.config();

const PORT: number = process.env.PORT ? Number.parseInt(process.env.PORT) : 8000;


export {
    PORT
}