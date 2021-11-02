const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse,
} = require('./controller')




app.get("/api/houses", getHouses)
app.put("/api/houses/:id", createHouse)
app.post("/api/houses", updateHouse)
app.delete("/api/houses/:id", deleteHouse)

const SERVER_PORT = 4004
app.listen(SERVER_PORT, ()=> console.log(`Server is running on ${SERVER_PORT}`))