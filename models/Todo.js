// const mongoose = require('mongoose');

// const TodoSchema = new mongoose.Schema({
//   todo: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
// });

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: String,
    description: String,
    userId: {
      type: String,
      required: true,
    },
  },
  { collection: 'todo-list' }
);

module.exports = mongoose.model('Todo', TodoSchema);
