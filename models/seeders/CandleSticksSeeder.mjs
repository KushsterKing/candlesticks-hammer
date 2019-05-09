import mongoose from 'mongoose';
import constants from '../../constants';

import { CandleStick } from '../';

import fs from 'fs';
const __dirname = fs.realpathSync('.');

const data = fs.readFileSync(__dirname + '/data.json', 'UTF-8');

mongoose.connect(constants.mongoURL, {useNewUrlParser: true});


CandleStick.collection.drop();

CandleStick.create(JSON.parse(data))
    .then(() => {
        console.log('added')
    }).catch((err) => {
        console.log(err)
    }).finally(()=>{
    mongoose.connection.close();
});