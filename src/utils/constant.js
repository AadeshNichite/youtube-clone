const GOOGLE_API_KEY = "AIzaSyBKCWbL6VpVAkkZiY5OGZTFxXqEPB-wUdw";

export const GET_ALL_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
