const { createServer } = require('node:http');

class DBClient  {
    constructor () {
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';

        const url = `mongodb://${host}:${port}/`;
        this.client = null;

        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
            if (err) this.client = false;
            else {
                this.clent = db.db(database);
                this.client.createCollection('users');
                this.client.createCollection('files');
            }
        });
    };
    isAlive () {
        return !!this.client;
    };

    async nbUsers() {
        const numDocs = await this.client.collection('users').estimatedDocumentCount({});
    }

        async function nbUsers () => {

        };

        async function nbFiles () => {

        };
    };
};

export default = dbClient;
