import * as mongoose from 'mongoose'

export class Database {
    public static connect(): void {
        const connectionString = process.env.MONGODB_URI || 'mongodb://heroku_cf279h4z:8tuqnuihu94nu4j3mdft4ku5pf@ds131676.mlab.com:31676/heroku_cf279h4z'
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }

        mongoose.connect(connectionString, options).then(() => console.log(`Mongoose connected to ds131676.mlab.com:31676/heroku_cf279h4z`)).catch((error: any) => console.error(`Database connection error: ${error}`))
    }
}