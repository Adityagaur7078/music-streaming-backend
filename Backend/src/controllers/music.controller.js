const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.service");

async function createMusic(req, res) {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Music file is required",
            });
        }

        const result = await uploadFile(
            req.file.buffer.toString("base64")
        );

        const music = await musicModel.create({
            audioUrl: result.url,
            title,
            artist: req.user.id,
        });

        return res.status(201).json({
            success: true,
            message: "Music uploaded successfully",
            music,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

async function createAlbum(req, res) {
    try {
        const { title, musicIds } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Album title is required",
            });
        }

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musicIds,
        });

        return res.status(201).json({
            success: true,
            message: "Album created successfully",
            album,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

async function getAllMusics(req, res) {
    try {
        const musics = await musicModel
            .find()
            .populate("artist", "username email");

        return res.status(200).json({
            success: true,
            message: "Musics fetched successfully",
            musics,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

async function getAllAlbums(req, res) {
    try {
        const albums = await albumModel
            .find()
            .populate("artist", "username email");

        return res.status(200).json({
            success: true,
            message: "Albums fetched successfully",
            albums,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

async function getAlbumById(req, res) {
    try {
        const { albumId } = req.params;

        const album = await albumModel
            .findById(albumId)
            .populate("artist", "username email")
            .populate("musics");

        if (!album) {
            return res.status(404).json({
                success: false,
                message: "Album not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Album fetched successfully",
            album,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = {
    createMusic,
    createAlbum,
    getAllMusics,
    getAllAlbums,
    getAlbumById,
};