 
 import mongoose from 'mongoose'
 const MONGO_URI = process.env.MONGO_URI;  
 
 
 
 interface MongooseCache {
    conn: typeof mongoose | null;
    promise : Promise<typeof mongoose> | null;
 }

 declare global {
    var mongoose : MongooseCache | undefined;
 }

 let cached : MongooseCache = global.mongoose || {conn:null, promise: null} 

 if(!global.mongoose) global.mongoose = cached;

 async function connectDB () {
     if(!MONGO_URI) throw new Error( "Please create the 'mongodb_uri' environment variable inside .env " );

    if(cached.conn) return cached.conn
    if(!cached.conn) {

        const options = {
            bufferCommands : false,
        };
        cached.promise = mongoose.connect(MONGO_URI,options).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;
    } catch (err) {
        cached.promise = null;
        throw err
    }

    return cached.conn;
 }  
 
 export default connectDB;
