import helper from "../helper/helper.js";

let playLists = [
    {
        _id: "12",
        title: "avc",
        desc: "asd",
        songs: ["1", "3"],
    }
];

const playListPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(playLists);
    }, 2000);
})

const createPlayList = async (title, desc, songs) => {
    const playList = {
        _id: helper.generatePlayListId(),
        title,
        desc,
        songs
    }

    playLists.push(playList);
    return playList;
}

const playCount = async (playListId) => {
    const playlists = await playListPromis;
    const playList = playlists.find((playlist) => playlist._id === playListId)
}

const getPlayListById = async (playListId) => {
    const playListsPromise = await playListPromis;
    const playList = playListsPromise.find((playlist) => playlist._id === playListId);

    return playList
}

export default {createPlayList, getPlayListById}