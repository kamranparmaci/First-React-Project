import axios from "axios";

const API_KEY = "e67d535eb95c4b458c8a6f7f348ebec4";
// 8dc8773d1eab476ab6308ded74d498d2

export default axios.create({
  BASE_URL: "https://api.spoonacular.com/recipes/random",
  params: {
    apiKey: API_KEY,
    number: 10,
  },
});
