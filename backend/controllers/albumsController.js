const jwt = require('jsonwebtoken')
const {Users,Albums,Galleries} = require('../db/models')
const secret_key = '1111'

class albumsController{
    async createAlbum(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secret_key)
            const {name,is_private} = req.body
            const gallery = await Galleries.findOne({where:{id:user.id}})
            const album = await Albums.create({name:name,gallery_id:gallery.id,is_private:is_private})
            return res.status(200).json({album:album})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error:e})
        }
    }
    async deleteAlbum(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secret_key)
            const album_id = req.params.id
            const gallery = await Galleries.findOne({where:{user_id:user.id},attributes:['id']})
            const album = await Albums.findOne({where:{id:album_id}})
            if(!album.gallery_id === gallery.id){
                return res.status(400).json('у вас нет прав')
            }
            await album.destroy()
            return res.status(200).json({message:"успешно"})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error:e})
        }
    }
    async addColabarator(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secret_key)
            const {username} = req.body
            const album_id = req.params.id
            const colabarator = await Users.findOne({where:{username:username}})
            if(!colabarator){
                return res.status(400).json({error:'Такого пользователя не существует'})
            }
            const album = await Albums.findOne({where:{id:album_id}})
            await album.addUsers(colabarator)
            return res.status(200).json({message:"успешно"})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error:e})
        }
    }
    async deleteColabarator(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secret_key)
            const {username} = req.body
            const album_id = req.params.id
            const colabarator = await Users.findOne({where:{username:username}})
            if(!colabarator){
                return res.status(400).json({error:'Такого пользователя не существует'})
            }
            const album = await Albums.findOne({where:{id:album_id}})
            await album.removeUsers(colabarator)
            return res.status(200).json({message:"успешно"})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error:e})
        }
    }
}

module.exports = new albumsController