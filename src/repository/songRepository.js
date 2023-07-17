import helper from "../helper/helper.js";

let songs = [
    {
        _id: "1",
        title: "abc",
        artists: [
            {
                name: "Darul"
            }
        ],
        url: "http://localhost:8080",
        duration: 4,
        played: 1,
        isPlayed: false
    },
    {
        _id: "2",
        title: "abc",
        artists: [
            {
                name: "Darul"
            }
        ],
        url: "http://localhost:8080",
        duration: 5,
        played: 2,
        isPlayed: false
    },
    {
        _id: "3",
        title: "abc",
        artists: [
            {
                name: "Darul"
            }
        ],
        url: "http://localhost:8080",
        duration: 6,
        played: 3,
        isPlayed: false
    }
]

const songPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(songs);
    }, 2000);
});

const getSongs = async () => {
    const songs = await songPromise;
    return songs;
}

const getSongSortByMostPlayed = async () => {
    const songs = await songPromise;
    songs.sort((a, b) => b.played - a.played)

    return songs;
}

const createSong = async (title, duration, artists, url) => {
    const song = {
        songId: helper.generateSongId(),
        title,
        artists,
        url,
        duration,
        played: 0,
        isPlayed: false
    }

    songs.push(song);
    return song;
}

const getSongById = async (songId) => {
    const songs = await songPromise
    return songs.find((song) => song._id === songId)
}

export default {getSongs, createSong, getSongById, getSongSortByMostPlayed};