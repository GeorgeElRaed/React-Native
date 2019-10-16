const express = require('express');
const Items = express.Router();

const { AddItem, AddReview, FindItems, FindReviews, FindReviewsCount, FindSpecsheet } = require("../../Database/DB");

/* Dummy Items
Item = {
    ID: 1,
    ImagesSrc: ["https://i.ibb.co/RPKtb32/Cube.jpg", "https://i.ibb.co/RPKtb32/Cube.jpg", "https://i.ibb.co/RPKtb32/Cube.jpg"],
    Description: "This Cube is awesome, it has 6 colors, suitable for all ages, u should buy it",
    Price: 24.66,
    FullPrice: 29.99,
    Discount: 15,
    Currency: "US",
    CurrencySign: "$",
    ShippingMethod: "Free Shipping",
    StarRating: 3.5,
    NumberSold: 1053
}

Review = {
    ItemID: "5da48bcc681775522c71ac53",
    Username: "george",
    Rating: 2 + 0.6,
    Review: "This item is so good i had so much fun playing with idk why but somthing about it is so god damn fun",
    Date: new Date().toISOString(),

}
*/

Items.get("/AddItem", async (req, res, next) => {
    res.render("../View/AddItem");
})

Items.post("/AddItem", async (req, res, next) => {

    AddItem(req.body)

    res.redirect("/Items/AddItem");
})

Items.get("/Specsheet/:ID", async (req, res, next) => {

    const ID = req.params.ID;

    FindSpecsheet(ID,(SS)=>{
        res.send(SS);
    })

})

Items.get("/Filter/:query/:page", async (req, res, next) => {
    items = [];
    const query = req.params.query;
    const ItemPerPage = 10;
    const page = req.params.page || 1;

    console.log(query);
    console.log("Request received From test thing")
    FindItems(query, ItemPerPage, page, (Items) => {
        res.send(Items);
    })
})

Items.get("/", async (req, res, next) => {
    items = [];
    console.log("Request received From test thing")
    res.send(items);
})

Items.get("/:page?", async (req, res, next) => {
    console.log("request received!")
    const ItemPerPage = 10;
    const page = req.params.page || 1;

    FindItems("", ItemPerPage, page, (Items) => {
        res.send(Items);
    })

})

Items.get("/Reviews/Count/:ID", async (req, res, next) => {
    console.log("request received!")
    const ID = req.params.ID;

    FindReviewsCount(ID, (count) => {
        res.send(JSON.stringify({ count: count }));
    })

})

Items.post("/Reviews/AddReview", async (req, res, next) => {

    AddReview(req.body);
    AddReview(req.body);
    AddReview(req.body);
    AddReview(req.body);
    AddReview(req.body);
    AddReview(req.body);

    res.send(JSON.stringify({ thing: "hello" }));
});

Items.get("/Reviews/:ID/:page?", async (req, res, next) => {
    console.log("request received!")
    const ReviewsPerPage = 5;
    const page = req.params.page || 1;
    const ID = req.params.ID;

    FindReviews(ID, ReviewsPerPage, page, (Reviews) => {
        res.send(Reviews);
    })

})


module.exports = Items;
