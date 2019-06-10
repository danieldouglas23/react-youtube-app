import axios from "axios";
const apiKey = "AIzaSyB8Tm8-dXKAx9IEqf3Ds59O4L8rzx5ueN4";

//group all API calls
export default {
    searchYouTube: function(term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey
            }
        });
    }


}
