import {MongoClient} from 'mongodb';

export class RobotRepository{
    url: string = "mongodb://localhost:27017/";
    db: string = "mydb";

    constructor(url, db) {
        this.url = url;
        this.db = db;
    }

    getAllRobots(): Promise<any> {
        return new Promise<any>(resolve => {
            MongoClient.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
                if (err) throw err;
                const dbo = db.db(this.db);
                const projection = {_id: 0, name: 1};
                dbo.collection("robots").find({}, {projection}).toArray(function(err, result) {
                    if (err) throw err;
                    db.close();
                    resolve(result);
                });
            });
        });
    }




}
