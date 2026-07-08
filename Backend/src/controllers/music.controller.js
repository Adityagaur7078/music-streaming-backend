const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const jwt = require('jsonwebtoken');
const { uploadFile } = require("../services/storage.service");



async function createMusic(req, res) {
    try {
        const { title } = req.body;
        const file = req.file;

        const result = await uploadFile(file.buffer.toString("base64"));

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist: req.user.id,
        });

        res.status(201).json({
            message: "Music created",
            music: {
                id: music._id,
                uri: music.uri,
                title: music.title,
                artist: music.artist,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function createAlbum(req, res) {
    try {
        const { title, musicIds } = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musicIds,
        });

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

async function getAllMusics(req, res){
    const musics = await musicModel.find().limit(20).populate("artist", "username email");

    res.status(200).json({
        message: "Musics fetched successfully",
        musics: musics,
    })
}

async function getAllAlbums(req, res){
    
    const albums = await albumModel.find().select("title artist").populate("artist", "username email")

    res.status(200).json({
        message: "album fetched successfully",
        albums: albums,
    })
}

async function getAlbumsById(req, res){

    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics")

    return res.status(200).json({
        message: "Album fetched successfully",
        album: album,
    })
}

module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumsById }