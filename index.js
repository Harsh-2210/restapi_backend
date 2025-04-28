const express = require('express')
const connecToDB = require('./database')
const app = express()
const playerModule = require('./schema/player.model')
const allPlayers = require('./players.json')
const cors = require('cors')                     //used for security purpose
connecToDB()

// app.use(cors())

app.use(cors({
    origin:"*",
    methods:["GET","PUT","POST","DELETE"]
}))

// app.use(cors({
//     origin:["http://127.0.0.1:5500/"],
//     methods:["GET","PUT","POST","DELETE"]
// }))

app.get("/", (req,res)=>{
    console.log(allPlayers);
    res.send('This is Home Page')
})

app.get('/addplayers', async(req,res)=>{
    try {
        let playersdata = await playerModule.insertMany(allPlayers)
        res.send({
            message:'players added successfully',
            player: playersdata
        })
    } catch (error) {
        res.send({
            message:'players not added',
            error: error
        })
    }
})

app.get('/players/all', async(req,res)=>{

    // console.log(req.query,req.method);

    const {birth_place,name,country,role} = req.query;

    let search = {}
    if(birth_place) search.birth_place=birth_place
    if(role) search.role=role
    if(name) search.name=name
    if(country) search.country=country

    console.log(birth_place,name,country);
    
    
    try {
        const allData = await playerModule.find(search)
        res.send({
            result: allData.length,
            message: 'All players data',
            players: allData
        })
    } catch (error) {
        res.send({
            message: 'Error fetching players',
            error: error
        })
    }
})



//   .listen:- used to restart the server
app.listen(8000,()=>{
    console.log('server is running on port http://localhost:8000/');
    
})