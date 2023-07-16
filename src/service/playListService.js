import playListRepository from "../repository/playListRepository.js";
const createPlayList = async (title, desc, songs) => {
    const playList = await playListRepository.createPlayList(title, desc, songs);
    return playList;
};

export default {createPlayList};