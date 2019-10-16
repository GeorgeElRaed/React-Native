const mongoose = require('mongoose');
const ItemSchema = require('./Models/ItemSchema');
const ReviewSchema = require('./Models/ReviewSchema');
const SpecSheetSchema = require('./Models/SpecSheetSchema');

mongoose.connect('mongodb://localhost/Computer-Store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const ItemModel = mongoose.model('item', ItemSchema);
const ReviewModel = mongoose.model('review', ReviewSchema);
const SpecSheetModel = mongoose.model('specsheet', SpecSheetSchema);


AddItem = (Model) => {

    ItemInstance = new ItemModel(Model);

    ItemInstance.Price = ItemInstance.FullPrice - (ItemInstance.FullPrice * ItemInstance.Discount / 100);
    ItemInstance.StarRating = 5;
    ItemInstance.NumberSold = 0;
    ItemInstance.CurrencySign = "$";

    ItemInstance.save((err, newItem) => {
        if (err)
            console.log("Error: " + err);
        SpecsInstance = new SpecSheetModel(Model);
        SpecsInstance.ItemID = newItem._id;

        SpecsInstance.save((err) => {
            if (err)
                console.log("Error: " + err);
        });
    })


}

AddSpecSheet = (Model) => {
    instance = new SpecSheetModel(Model);
    instance.save((err) => {
        if (err)
            console.log("Error: " + err);
    })
}

AddReview = (Model) => {
    instance = new ReviewModel(Model);

    instance.save((err) => {
        if (err)
            console.log("Error: " + err);
    })
}

FindItems = (query, ItemPerPage, page, callback) => {
    Search = {};
    if (query != "")
        Search = { Description: new RegExp('.*' + query + '.*', "i") };

    ItemModel.find(Search, "-__v")
        .skip(ItemPerPage * page - ItemPerPage)
        .limit(ItemPerPage)
        .then((Items) => {
            Items.forEach(item => {
                item.ID = item._id;
            })
            callback(Items)
        });
}

FindReviews = (ID, ReviewsPerPage, page, callback) => {

    ReviewModel.find({ ItemID: ID }, "-__v")
        .skip(ReviewsPerPage * page - ReviewsPerPage)
        .limit(ReviewsPerPage)
        .then((Reviews) => {
            Reviews.forEach(Review => {
                Review.ID = Review._id;
            })
            callback(Reviews)
        });
}

FindSpecsheet = (ID, callback) => {

    SpecSheetModel.findOne({ ItemID: ID }, "-_id -__v")
        .then((SpecSheet) => {
            callback(SpecSheet)
        });
}

FindReviewsCount = (ID, callback) => {

    ReviewModel.find({ ItemID: ID }, "-__v")
        .then((Reviews) => {
            callback(Reviews.length)
        });
}

module.exports = {
    AddItem,
    FindItems,
    AddReview,
    FindReviews,
    FindReviewsCount,
    AddSpecSheet,
    FindSpecsheet,
};