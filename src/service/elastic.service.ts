

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
            }).then(() => {
                resolve(null);
            }).catch((err: any) => {
                reject(err);
            })

        });

    }

    public static async searchByParameter( parameterName : string, parameterValue : string ){

        const elasticClient = ElasticService.getElasticConnection();

        return new Promise( (resolve, reject) => {

            elasticClient.search({
                body: {
                    query: {
                        match: { parameterName : parameterValue }
                    }
                }
            })
            .then((response: any) => {
                resolve( response );
            }).catch((err: any) => {
                reject(err);
            })

        });
    }

    public static async searchByWildcard( parameterName : string, parameterValue : string ){

        const elasticClient = ElasticService.getElasticConnection();

        return new Promise( (resolve, reject) => {

            elasticClient.search({
                body: {
                    query: {
                        wildcard: { parameterName : parameterValue }
                    }
                }
            })
            .then((response: any) => {
                resolve( response );
            }).catch((err: any) => {
                reject(err);
            })

        });

    }
    
}