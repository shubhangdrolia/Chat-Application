const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const MessageSchema = new Schema({
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'conversations',
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = Message = mongoose.model('messages', MessageSchema);

// { "_id" : ObjectId("607421d9695536c0ab2665b0"), "conversation" : ObjectId("60742120695536c0ab2665a3"),
// "to" : ObjectId("607420e4695536c0ab2665a1"),
// "from" : ObjectId("60742116695536c0ab2665a2"), "body" : "acha", "date" : "1618223577395", "__v" : 0 }
