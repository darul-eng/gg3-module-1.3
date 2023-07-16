function generateSongId(){
    return Math.random().toString(10).substr(2,6);
}

function generatePlayListId(){
    return Math.random().toString(10).substr(2,6);
}

export default {generateSongId, generatePlayListId};