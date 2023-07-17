import songRepository from "../repository/songRepository.js";
const getSongs = async (params = "") => {
    if(params === "most-played"){
        return await songRepository.getSongSortByMostPlayed(params);
    }else{
        return await songRepository.getSongs();
    }
}

const createSong = async (title, duration, artists, url) => {
    const song = await songRepository.createSong(title, duration, artists, url);
    return song;
}

const getSongById = async (songId) => {
    const song = await songRepository.getSongById(songId)
    return song;
}

const playSong = async (songId) => {
    const song = await songRepository.getSongById(songId);
    song.played += 1;

    return song
}

export default {getSongs, createSong, getSongById, playSong};