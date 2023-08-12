import Video from '../models/video.js';

class VideoService {
  async getAllVideos() {
    try {
      return await Video.find({}, 'videoId thumbnailUrl live title description viewers');
    } catch (err) {
      throw new Error('Failed to fetch videos');
    }
  }
}

export default new VideoService();
