const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const idea = new Schema(
  {
    activity: {
      type: String,
      minlength: 3,
      required: [true, "activity is required"],
    },
    type: {
      type: String,
      minlength: 3,
      required: [true, "type is required"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Idea = mongoose.model("idea", idea);

module.exports = Idea;
