const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  description: String,
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
