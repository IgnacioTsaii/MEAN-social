'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
        text: String,
        created_at: String,
        emitter: { type: Schema.ObjectId,ref:'USer' },
        receiver: { type: Schema.ObjectId,ref:'USer' }
});

module.exports = mongoose.model('message',MessageSchema);