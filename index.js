import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors'
import morgan from 'morgan';


const app = express()
app.use(cors())

app.use(morgan('dev'))

const PORT = process.env.PORT || 5000
const DB_URL = "mongodb+srv://simon:987654321@cluster0.8pv5z.mongodb.net/IntagramDB?retryWrites=true&w=majority"

app.use(express.json())


app.use('/', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

    } catch (e) {
        console.log("ERROR CONECTED :", e);
    }
}
startApp()



