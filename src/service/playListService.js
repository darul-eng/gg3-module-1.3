import playListRepository from "../repository/playListRepository.js";
import songRepository from "../repository/songRepository.js";
const createPlayList = async (title, desc, songs) => {
    const playList = await playListRepository.createPlayList(title, desc, songs);
    return playList;
};

const playCount = async (playListId) => {
    const playList = await playListRepository.getPlayListById(playListId);
    const songsInPlayList = playList.songs

    let playlistWithCounter = {
        title: playList.title
    }

    let count = 0;

    for (const songId of songsInPlayList){
        const songDetail = await songRepository.getSongById(songId);
        count += songDetail.played
    }

    playlistWithCounter.counter = count;
    return playlistWithCounter;
}

export default {createPlayList, playCount};