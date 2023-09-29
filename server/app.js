const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors=require('cors')
const alienRouter=require('./routes/aliens')
const url='mongodb+srv://mercy:mercy@cluster0.ijgyvw3.mongodb.net/it3crud?retryWrites=true&w=majority'
const app=express()
mongoose.connect(url)
const con=mongoose.connection
con.on('open',()=> //db on/off
{
    console.log('connected...')
})
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
