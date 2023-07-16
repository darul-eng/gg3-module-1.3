import express from "express";
import songController from "../controller/songController.js";
const router = new express.Router();

router.get('/song', songController.getSongs);
router.post('/song', songController.createSong);
router.get('/song/:id', songController.getSongById);

export {router};