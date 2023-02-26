const categoryService = require('../services/CategoryService')

module.exports = (app) => {
    // récupération des formations
    app.get('/api/v1/categories', async (req,res) => {

        //appeler la fonction 
        let categories = await categoryService.getCategories()
        //si il y'a un code erreur
        if (categories.code) {
            //envoi d'une reponse erreur 500 en json
            res.status(500).json({ msg: 'il y a eu un problème !', result: err });
        }
        //envoi un status 200 avec la liste  en json
        res.status(200).json({ result: categories })
            

    })
    // enregistrement d'une categorie
    app.post('/api/v1/category/save', async (req, res) => {

        //appeler la fonction 
        let categories = await categoryService.createCategory(req)
        //si il y'a un code erreur
        if (categories.code) {
            //envoi d'une reponse erreur 500 en json
            res.json({ status: 500, msg: 'il y a eu un problème !', result: err });
        }
        //envoi un status 200 avec un msg de réussite en json
        res.json({ status: 200, msg: "la categorie a bien été enregistré" });


    })
}