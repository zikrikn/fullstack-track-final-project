const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  videoId: { type: String, ref: "videos", required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
