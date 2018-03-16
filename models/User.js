const mongoose = require('mongoose');
const { Schema } = mongoose; //<--- Object Destrucuring

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
