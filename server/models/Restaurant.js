const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    menu: [
        {
            item: String,
            price: Number,
        },
    ],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
