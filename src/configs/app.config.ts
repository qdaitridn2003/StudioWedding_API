import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const AppConfig = {
    port: process.env.PORT,
    accessTokenKey: process.env.ACCESS_TOKEN_KEY,
    refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
};

export default AppConfig;
