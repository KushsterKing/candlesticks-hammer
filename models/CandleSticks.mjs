import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CandleSticks = new Schema({
    date: {type: String, required: true},
    open: {type: Number},
    high: {type: Number},
    low: {type: Number},
    close: {type: Number}
});

export default mongoose.model('CandleSticks', CandleSticks );