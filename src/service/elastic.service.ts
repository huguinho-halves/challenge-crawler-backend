

const elastic = require('elasticsearch');

const ELASTIC_HOST = process.env.ELASTIC_HOST;

export class ElasticService {

    
    private static getElasticConnection(){

        let elasticClient = elastic.Client({
            host: ELASTIC_HOST
        }); 

        return elasticClient;
    }

    public static async saveRecord( indexName : string, body : any ){

        const elasticClient = ElasticService.getElasticConnection();

        return new Promise( (resolve, reject) => {

            elasticClient.index({
                index: indexName,
                body: body
            }).then((response: any) => {
                resolve(response);
            }).catch((err: any) => {
                console.log(err);
                reject(err);
            })

        });

    }

    public static async searchByParameter( parameterValue : string ){

        const elasticClient = ElasticService.getElasticConnection();

        return new Promise( async (resolve, reject) => {

            const response = await elasticClient.search({
                index : "benefits",
                body: {
                    track_total_hits: true,
                    query: {
                        match: { "docnumber" : parameterValue }
                    }
                }
            })

            let list = [];
            if( response && response.hits && response.hits.hits ){
                list = response.hits.hits;
            }

            resolve(list);

        });
    }
    
}