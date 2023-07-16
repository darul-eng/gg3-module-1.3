import songService from "../service/songService.js";
import * as url from "url";

const getSongs = async (req, res) => {
    try{
        const songs = await songService.getSongs();
        res.status(200).json({
            message: "Success",
            data: songs
        })
    }catch (error){
        res.status(500).json({error: error.message})
    }

}

const createSong = async (req, res) => {
    try{
        const {title, duration, artists, url} = req.body;
        const songId = await songService.createSong(title, duration, artists, url);
        res.status(201).json({
            message: "Success",
            data: songId
        })
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

const getSongById = async (req, res) => {
    try {
        const song = await songService.getSongById(req.params.id);
        res.status(200).json({
            message: "Success",
            data: song
        })
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

export default {getSongs, createSong, getSongById};