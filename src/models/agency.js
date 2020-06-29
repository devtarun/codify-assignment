const mongoose = require('mongoose');

// AGENCY SCHEMA
const agencySchema = mongoose.Schema({
    name: { type: String, required: true },
    address_1: { type: String, required: true },
    address_2: { type: String },
    state: { type: String, required: true },
    city: { type: String, required: true },
    phone_number: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Agency', agencySchema);