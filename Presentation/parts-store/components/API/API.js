const IP = "199.199.199.125"
const PORT = 4000;
export default class API {


    static GetItems = (page, callback) => {
        fetch("http://" + IP + ":" + PORT + "/Items/" + page, {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((Obj) => {
                callback(Obj);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static GetItemReviews = (ID, page, callback) => {
        fetch("http://" + IP + ":" + PORT + "/Items/Reviews/" + ID + "/" + page, {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((Obj) => {
                callback(Obj);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static GetItemSpecSheet = (ID, callback) => {
        fetch("http://" + IP + ":" + PORT + "/Items/Specsheet/" + ID, {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((Obj) => {
                callback(Obj);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static GetReviewsCount = (ID, callback) => {
        fetch("http://" + IP + ":" + PORT + "/Items/Reviews/Count/" + ID, {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((Obj) => {
                callback(Obj.count);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static SearchItems = (query, page, callback) => {
        fetch("http://" + IP + ":" + PORT + "/Items/Filter/" + query + "/" + page, {
            method: 'get',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((Obj) => {
                callback(Obj);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static AddReview = (Model, callback) => {
        fetch("http://" + IP + ":" + PORT + "/Items/Reviews/AddReview", {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Model),
        })
            .then((response) => response.json())
            .then((Obj) => {
                callback(Obj);
            })
            .catch((err) => {
                console.log(err);
            });
    }


}