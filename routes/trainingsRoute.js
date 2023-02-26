const trainingService = require('../services/TrainingService')

module.exports = (app) => {
    // récupération des formations
    app.get('/api/v1/trainings', async (req, res, next) => {

        //appeler la fonction 
        let trainings = await trainingService.getTrainings()
        //si il y'a un code erreur
        if (trainings.code) {
            //envoi d'une reponse erreur 500 en json
            res.json({ status: 500, msg: 'il y a eu un problème !', result: err });
        }
        //envoi un status 200 avec la liste  en json
        res.json({ status: 200, result: trainings });

    })
}