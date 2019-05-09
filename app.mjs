import express from 'express';

import {CandleStick} from './models'

import convertJSONToCSVHelper from './helpers/ConvertJSONToCSVHelper'

import fs from "fs";

const app = express();

app.get('/', async (req, res) => {

    const candleSticks = await CandleStick.find( {
        $expr: {
            $cond: {
                if: { $gt: ["$close", "$open"] },
                then: {
                    $cond: {
                        if: {$eq: ["$high", "$close"]},
                        then: {$lte: [{$subtract: ["$close", "$open"]}, {$multiply: [{$divide: [{$subtract: ["$high", "$low"]}, 100]}, 30]}]},
                        else: null
                    }
                },
                else: {
                    $cond: {
                        if: {$gt: ["$open", "$close"]},
                        then: {
                            $cond: {
                                if: {$eq: ["$high", "$open"]},
                                then: {$lte: [{$subtract: ["$open", "$close"]}, {$multiply: [{$divide: [{$subtract: ["$high", "$low"]}, 100]}, 30]}]},
                                else: null
                            }
                        },
                        else: null
                    }
                }
            }
        }
    });

    const __dirname = fs.realpathSync('.');

    fs.writeFileSync(__dirname + '/outputData.json', JSON.stringify(candleSticks));

    convertJSONToCSVHelper();

    // console.log(candleSticks);

    res.status(200).send(candleSticks)

});

app.listen(3000, () => {
    console.log('connected to port 3000')
});