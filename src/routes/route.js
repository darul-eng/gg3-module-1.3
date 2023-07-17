import express from "express";
import songController from "../controller/songController.js";
import playListController from "../controller/playListController.js";
const router = new express.Router();

router.get('/song', songController.getSongs);
router.post('/song', songController.createSong);
router.get('/song/:id', songController.getSongById);
router.post('/song/:id/play', songController.playSong);
router.post('/playlist', playListController.createPlayList);
router.get('/playlist/:id/play-count', playListController.playCount)

export {router};