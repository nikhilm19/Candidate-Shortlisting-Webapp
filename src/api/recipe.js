import axios from "axios";

/*axios.get({
    url,
    {
        params:{query:term},
        headers:{
             Authorization : 'Client-ID A1OoK-fx1Jm5L9zq_iyU1V4k3ZUfGgQ2fa0_GHWbH0A'



        }
    }
}) */
var recipeApi = axios.create({
  baseURL: "http://starlord.hackerearth.com/recipe",
});

export default recipeApi;
