import playListService from "../service/playListService.js";

const createPlayList = async (req, res) => {
    try {
        const {title, desc, songs} = req.body;
        const playList = await playListService.createPlayList(title, desc, songs);
        res.status(201).json({
            message: "Success",
            data: playList
        })
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

const playCount = async (req, res) => {
    try {
        const playListId = req.params.id;
        const playCount = await playListService.playCount(playListId);
        res.status(200).json({
            message: "Success",
            data: playCount
        })
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

export default {createPlayList, playCount};