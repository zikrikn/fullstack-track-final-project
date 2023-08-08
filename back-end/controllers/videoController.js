import VideoService from "../services/videoService.js";

class VideoController {
  async getVideoList(req, res, next) {
    try {
      const videos = await VideoService.getAllVideos();
      res.json(videos);
    } catch (err) {
      next(err);
    }
  }
}

export default new VideoController();
