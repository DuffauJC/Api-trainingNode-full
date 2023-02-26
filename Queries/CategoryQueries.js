const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class CategoryQueries{

    static getAllCategories = async () => {
        return await prisma.category.findMany({include:{trainings:true}})
    }
    static createCategory = async (data) => {
        return await prisma.category.create({data:data})
    }




}
module.exports = CategoryQueries