import helper from "../helper/helper.js";

let playLists = [
    {
        _id: "12",
        title: "avc",
        desc: "asd",
        songs: ["idSong1", "idSong2"],
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

export default {createPlayList}