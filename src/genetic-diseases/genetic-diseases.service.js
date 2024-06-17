const GeneticDiseases = require('./genetic-diseases.model')

class GeneticDiseasesServices {

    static async findAll(){
        return await GeneticDiseases.findAll(
        //     {
        //     where: {
        //         mortalityRate: 4.5   condicionando lo que debe mostrar
        //     }
        // }
        )
    }
     
    static async create(data){
        return await GeneticDiseases.create(data)
    }


    static async findOne(id){
        return await GeneticDiseases.findOne({
            where: {
                id: id
            }
        })
    }

    
}

module.exports = GeneticDiseasesServices; 