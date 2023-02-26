const trainingQueries=require('../Queries/TrainingsQueries')


class TrainingService {

    static getTrainings = async () => {
        return await trainingQueries.getAllTrainings()
    }

}
module.exports=TrainingService