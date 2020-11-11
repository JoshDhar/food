import axios from "axios";
import react from "react";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wTEkX0lom2tB1_Acx04hhTwPRCYVdklY5hurOjxj2qSpfDkgmgf_hmi2I9FFgWNCjPXYOk5DYqrkQIciQD1KWayb5iknPhG4hVsZhChC-wfDNzIYespd5BPjOumrX3Yx",
  },
});
