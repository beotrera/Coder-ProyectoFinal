import mongoose from 'mongoose';
const { MONGO_DB_URI } = process.env;

export async function connectToDatabase(){
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    const mongooseConnection = await mongoose.connect(MONGO_DB_URI || "mongodb://localhost/ecommerce", opts);
    if (!mongooseConnection.connection) {
        console.log('Couldn\'t connect to mongo with mongoose');
        return null;
    }
    return mongooseConnection;
}

export default mongoose;
