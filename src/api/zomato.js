import axios from "axios";

export default axios.create({
  baseURL: "https://developers.zomato.com/api/v2.1",
  headers: {
    Accept: "application/json",
    "user-key": "e416b0b9edb5e61aa0169d8b9b107c96",
  },
});
