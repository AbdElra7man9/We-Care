const mongoose = require('mongoose')
const chatSchema = new mongoose.Schema(
    {
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        lastMSG: {
            type: String
        }
    },
    { timestamps: true, minimize: false }
);
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;