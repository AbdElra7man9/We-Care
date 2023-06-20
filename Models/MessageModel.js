const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        chatId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat'
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        msg: {
            type: String
        },
        image: {
            public_id: {
                type: String,
            }, url: {
                type: String,
            }
        }
    },
    { timestamps: true, minimize: false }
);
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;