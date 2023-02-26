const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class TrainingsQueries{

    static getAllTrainings = async () => {
        return await prisma.training.findMany({include:{Category:true}})
    }




}
module.exports = TrainingsQueries