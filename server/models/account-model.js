const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema(
    {
        name: { type: String, required: true },
        password: { type: String, required: true },
        photo: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('accounts', Account)