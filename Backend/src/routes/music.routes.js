const express = require("express");
const multer = require("multer");

const musicController = require("../controllers/music.controller");
const authorize = require("../middlewares/auth.middleware");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

// Artist Routes
router.post( "/upload", authorize("artist"), upload.single("music"), musicController.createMusic );

router.post( "/album", authorize("artist"), musicController.createAlbum );

// User & Artist Routes
router.get( "/", authorize("user", "artist"), musicController.getAllMusics );

router.get( "/albums", authorize("user", "artist"), musicController.getAllAlbums );

router.get( "/albums/:albumId", authorize("user", "artist"), musicController.getAlbumById );

module.exports = router;