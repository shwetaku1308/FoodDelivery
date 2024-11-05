const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
    items: [
        {
            item: String,
            quantity: Number,
        },
    ],
    status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
