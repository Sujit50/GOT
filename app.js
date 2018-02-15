import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import index from './routes/index';
import dotenv from 'dotenv';

dotenv.config({silent: true});

const db = mongoose.connection;
const app = express();
const port = process.env.PORT || 8000;
const dbuser = process.env.DB_USER || 'localhost';
const dbpass = process.env.DB_PASS || '123456';

mongoose.connect(`mongodb://${dbuser}:${dbpass}@ds235788.mlab.com:35788/got_db`);
db.on('error', console.error.bind(console, 'connection error:'));

app.use('/', index);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Express server listening at port ${port}`)
});