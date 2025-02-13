const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
  customization: {
    type: String,
    default: "No customization requested",
    set: (v) => (v === "" ? "No customization requested" : v),
  },
  phoneNumber: {
    type: String,
    default: "Not Provided",
    set: (v) => (v === "" ? "Not Provided" : v),
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
    set: (v) => (v === "" ? "Pending" : v),
  },
  createdAt: {
    type: Date,
    default: Date.now,
    set: (v) => (v == null ? Date.now() : v),
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
