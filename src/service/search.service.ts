

import { MessageQueue } from "../queue/messages.queue"

const PRODUCER_QUEUE_NAME = process.env.RABBIT_QUEUE_NAME || "";

export class SearchService {

    public static async searchByCpf( cpf : string ){

        const payload = {
            "docnumber" : cpf
        }

        await MessageQueue.produce( PRODUCER_QUEUE_NAME, payload );
    }
}