import mongoose from "mongoose";

import CandleStick from './CandleSticks'

import constants from '../constants'

mongoose.connect(constants.mongoURL, {useNewUrlParser: true});

export {CandleStick}