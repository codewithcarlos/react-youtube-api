import axios from "axios";

const KEY = "AIzaSyCl7UJGYEUbtrGrp2gCC6AXVlJGd7xdCE8";

export default axios.create({
  params: {
    part: "snippet",
    maxresults: 5,
    key: KEY
  },
  baseURL: "https://www.googleapis.com/youtube/v3"
});
