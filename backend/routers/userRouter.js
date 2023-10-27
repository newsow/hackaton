const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const albumsController = require('../controllers/albumsController')

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/gallery',userController.userGallery)
router.post('/findUser',userController.findOneUser)

router.post('/album/:id/add-collaborator',albumsController.addColabarator)
router.post('/album/:id/delete-collaborator',albumsController.deleteColabarator)
router.post('/album/create',albumsController.createAlbum)
router.post('/album/delete/:id',albumsController.deleteAlbum)

module.exports = router