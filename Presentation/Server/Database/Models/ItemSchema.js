const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

ItemSchema = new Schema({
    ID: String,
    ImagesSrc: [{ type: String }],
    Description: String,
    Price: Number,
    FullPrice: Number,
    Discount: { type: Number, min: 1, max: 99 },
    Currency: String,
    CurrencySign: String,
    ShippingMethod: String,
    StarRating: { type: Number, min: 0, max: 5 },
    NumberSold: Number
});

ItemSchema.pre('save', (next) => {
    console.log("Item being Added");
    next();
})

ItemSchema.post('save', () => {
    console.log("Item Added Succefully!!");
})

module.exports = ItemSchema;