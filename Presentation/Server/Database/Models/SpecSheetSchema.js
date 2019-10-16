const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

SpecSheetSchema = new Schema(
    {
        ItemID: String,
        Name: String,
        ModelNumber: String,
        Brand: String,
        Memory: String,
        CPU: String,
        HDD: String,
        SSD: String,
        OS: String,
    }
);

SpecSheetSchema.pre('save', (next) => {
    console.log("Review being Added");
    next();
})

SpecSheetSchema.post('save', () => {
    console.log("Review Added Succefully!!");
})

module.exports = SpecSheetSchema;