const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});

module.exports = mongoose.model("Video", videoSchema);
