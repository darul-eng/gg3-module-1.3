import express from "express";
import songController from "../controller/songController.js";
import playListController from "../controller/playListController.js";
const router = new express.Router();

router.get('/song', songController.getSongs);
router.post('/song', songController.createSong);
router.get('/song/:id', songController.getSongById);
router.post('/playlist', playListController.createPlayList);

export {router};