import {router} from "./routes/route.js";
import express from 'express';
const app = express();
const port = 3000;

import songController from "./controller/songController.js";

app.use(express.json());
app.use('/api', router)
//
// let songs = [];
//
// app.post('/song', (req, res) => {
//     let song = {}
//     let id = req.body.id;
//     let title = req.body.title;
//     let artists = req.body.artist;
//     let url = req.body.url;
//
//     song.id = id;
//     song.title = title;
//     song.artists = artists;
//     song.url = url;
//     songs.push(song);
//
//     res.json({
//         meta: {
//             status: 200,
//             message: "Success",
//         },
//         data: {
//             song
//         }
//     })
// });
//
// app.get('/song', (req, res) => {
//
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})