import dotenv from 'dotenv'
dotenv.config()

const config = {
    PORT: process.env.PORT || 3000,
    DATABASE_URI: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
}

export {config}