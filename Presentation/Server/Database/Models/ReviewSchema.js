const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

ReviewSchema = new Schema(
    {
        ItemID: String,
        Username: String,
        Rating: { type: Number, min: 0, max: 5 },
        Review: String,
        Date: Date,
    }
);

ReviewSchema.pre('save', (next) => {
    console.log("Review being Added");
    next();
})

ReviewSchema.post('save', () => {
    console.log("Review Added Succefully!!");
})

module.exports = ReviewSchema;