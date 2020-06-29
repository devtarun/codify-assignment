const mongoose = require('mongoose');

// USER SCHEMA
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);