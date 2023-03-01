const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

const app = express()
const port = process.env.PORT || 8000
global.__basedir = __dirname;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('assets'))

//import des routes
const trainingRoute = require('./routes/trainingsRoute')
const categoryRoute = require('./routes/categoryRoute')
const filesRoute = require('./routes/filesRoute')


async function main() {
    // Connect the client
    await prisma.$connect()
    console.log('connecté a la db')


    // ... you will write your Prisma Client queries here
    trainingRoute(app)
    categoryRoute(app)
    filesRoute(app)

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log('Bdd non connectée', e)
        await prisma.$disconnect()
        process.exit(1)
    })
app.get('/', (req,res) => {
    res.json({status:200, msg: "Welcome sur API training !!" });
})

app.listen(port, () => {
    console.log(`API TRAINING on port ${port}`)
})