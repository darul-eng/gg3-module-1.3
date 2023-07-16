// All songs data
let allSongs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];

// Playlist data
let playlist = [];

// Function to display all songs
function displayAllSongs() {
    let allSongsList = document.getElementById("all-songs-list");
    allSongsList.innerHTML = "";

    allSongs.forEach((song) => {
        let listItem = document.createElement("li");
        listItem.textContent = song;
        listItem.addEventListener("click", () => addSongToPlaylist(song));
        allSongsList.appendChild(listItem);
    });
}

// Function to display playlist songs
function displayPlaylist() {
    let playlistList = document.getElementById("playlist-list");
    playlistList.innerHTML = "";

    playlist.forEach((song) => {
        let listItem = document.createElement("li");
        listItem.textContent = song;
        playlistList.appendChild(listItem);
    });
}

// Function to add a song to the playlist
function addSongToPlaylist(song) {
    if (!playlist.includes(song)) {
        playlist.push(song);
        displayPlaylist();
    }else{
        alert('Song Already add into playlist')
    }
}

// Display initial songs
displayAllSongs();
displayPlaylist();
