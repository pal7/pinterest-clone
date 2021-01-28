import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID GS6gXyAhHM3JdutX2hf2DsDacETi81pfi-S22hxyzzo",
  },
});

//Link: <https://api.unsplash.com/search/photos?page=1&query=office>;
