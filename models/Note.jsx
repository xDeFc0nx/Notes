const mongoose = require("moongose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [40, "Title cannot be more then 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more then 200 characters"],
  },
});
module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
