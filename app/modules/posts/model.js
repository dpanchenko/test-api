const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: { type: Number, require: true, unique: true },
  userId: { type: Number, required: true },
  title: { type: String },
  body: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
});

schema.index({ id: 1 });
schema.index({ userId: 1 });

module.exports = mongoose.model('Post', schema);
