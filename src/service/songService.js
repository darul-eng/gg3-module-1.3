import songRepository from "../repository/songRepository.js";
const getSongs = async () => {
    const songs = await songRepository.getSongs();
    return songs
}

const createSong = async (title, duration, artists, url) => {
    const song = await songRepository.createSong(title, duration, artists, url);
    return song;
}

const getSongById = async (songId) => {
    const song = await songRepository.getSongById(songId)
    console.log(song);
    return song;
}

export default {getSongs, createSong, getSongById};