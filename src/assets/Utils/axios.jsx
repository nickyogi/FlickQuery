import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGJhYjBhOTc5ZmU4OTMxOTliNzhhZmNiMWEyNjhlNiIsIm5iZiI6MTc0ODQzMzUyNy43NjEsInN1YiI6IjY4MzZmYTc3ZGMxMmI5ZDI2NzgzOTM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68ndRmrLvZ_QTkJLmZuz03M71ZXfcxGF1gCRztr5ATE",
  },
});

export default instance;
