import {router} from "./routes/route.js";
import express from 'express';
const app = express();
import {config} from "../config.js";

app.use(express.json());
app.use('/api', router)

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`)
})