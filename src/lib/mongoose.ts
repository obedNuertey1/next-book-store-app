import mongoose from "mongoose";

export class MongooseConnect{
    private MONGODB_URI;
    constructor(mongoUri: string){
        this.MONGODB_URI = mongoUri
    };
    private async connectToDatabase(){

        if(!this.MONGODB_URI){
            throw new Error("Please define the MONGO_URI environment variable.")
        }

        let cached = (global as any).mongoose;

        if(!cached){
            cached = (global as any).mongoose = {conn: null, promise: null};
        }

        return await (async ()=>{
            if(cached.conn){
                return cached.conn;
            }

            if(!cached.promse){
                cached.promise = mongoose.connect(this.MONGODB_URI).then((mongoose)=>{
                    console.log("Connected to MongoDB!");
                    return mongoose;
                });
            }

            cached.conn = await cached.promise;
            return cached.conn;
        })();
    }

    public async connect(){
        return await this.connectToDatabase();
    }
}