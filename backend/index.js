const express = require('express')
const cors = require('cors')
const { json } = require('sequelize')
const userRouter = require('./routers/userRouter')
const app = express()
const corsOptions = {
    origin: 'https://localhost:3000'
}
const PORT = 5000
app.use(cors(corsOptions))
app.use(express.json())
app.use('/user',userRouter)


app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})