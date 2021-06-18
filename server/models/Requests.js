const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const requestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  sitter: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  start: {
    start: Date,
    required: true,
  },
  end: {
    end: Date,
    required: true,
  },
  dropOffTime: {
    type: String,
    required: true,
  },
  accept: {
    accepted: Boolean,
    default: false,
  },
  decline: {
    declined: Boolean,
    default: false,
  },
  paid: {
    paid: Boolean,
    default: false,
  },
});
requestSchema.plugin(AutoIncrement, {id: 'request_seq', inc_field: 'requestId'});

module.exports = Request = mongoose.model("request", requestSchema);