const categoryQueries=require('../Queries/CategoryQueries')


class CategoryService {

    static getCategories = async () => {
        return await categoryQueries.getAllCategories()
    }
    static createCategory = async (req, res) => {
        let data = {}
        data.description = req.body.description
        data.imgurl="unknown.png"
        return await categoryQueries.createCategory(data)
    }

}
module.exports = CategoryService