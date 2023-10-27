const {Users,Albums,Galleries} = require('../db/models')
const secret_key = '1111'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (id,email,username)=>{
    return jwt.sign({id,email,username},secret_key,{expiresIn:'24h'})
}

class userController{
    async registration(req,res){
        try {
            const {email,password,username} = req.body
            const candidate = await Users.findOne({where:{email:email}})
            if (candidate){
                return res.status(400).json({error:'Пользователь с такой почтой уже существует'})
            }
            const candidate2 = await Users.findOne({where:{username:username}})
            if (candidate2){
                return res.status(400).json({error:'Пользователь с таким никнеймом уже существует уже существует'})
            }
            const hashPassword = bcrypt.hashSync(password,6)
            const user = await Users.create({email:email,password:hashPassword,username:username})
            const gallery = await Galleries.create({user_id:user.id})
            const token = generateToken(user.id,user.email,user.username)
            return res.status(200).json({message:'Пользователь успешно создан',token})
            
        } catch (e) {
            console.log(e)
            return res.status(400).json({message:'error'})
            
        }
        
    }
    async login(req,res){
        try {
            const {email,password} = req.body
            const user = await Users.findOne({where:{email}})
            if(!user){
                return res.status(400).json({error:'Неправильный логин или пароль'})
            }
            const passwordValidate = bcrypt.compare(password,user.password)
            if(!passwordValidate){
                return res.status(400).json({error:'Неправильный логин или пароль'})
            }
            const token = generateToken(user.id,user.email,user.username)
            return res.status(200).json({token})
        } catch (e) {
            console.log(e)
            return res.status(400).json({error:'login error'})
        }
    }

    async userGallery(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user = jwt.verify(token,secret_key)
            const gallery = await Galleries.findOne({where:{user_id:user.id},
            include:{
                model:Albums
            }
            })
            const coAutheredAlbums = await Users.findOne({where:{id:user.id},
                attributes:[],
                include:{
                    model: Albums,
                    through:{}
                }
                })
            return res.status(200).json({gallery:gallery,coAutheredAlbums:coAutheredAlbums})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error:e})
        }
    }

    async findOneUser(req,res){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const user_token = jwt.verify(token,secret_key)

            const {username} = req.body
            const user = await Users.findOne({where:{username:username}})
            const gallery = await Galleries.findOne({where:{user_id:user.id},
            include:{
                model: Albums,
                where:{is_private:false}
            }
            })
            return res.status(200).json({user:user,gallery:gallery})
        } catch (e) {
            console.log(e)
            return res.status(500).json({error:e})
        }
    }


}

module.exports = new userController