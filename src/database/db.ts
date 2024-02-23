import mongoose from "mongoose";

export function setUPConnection() {
    const url = process.env.DB_URL;
    const connectionParams= {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'news-application'
    }
// @ts-ignore
    mongoose.connect(url, connectionParams)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. ${err}`);
        })
}