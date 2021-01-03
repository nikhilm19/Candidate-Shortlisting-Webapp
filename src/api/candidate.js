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
var candidateApi = axios.create({
  baseURL:
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
});

export default candidateApi;
