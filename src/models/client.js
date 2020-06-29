const mongoose = require('mongoose');

// CLIENT SCHEMA
const clientSchema = mongoose.Schema({
    agency_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency' },
    name: { type: String },
    email: { type: String },
    phone_number: { type: String },
    total_bill: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', clientSchema);