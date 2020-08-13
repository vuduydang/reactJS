  
import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/php3/public/api",
    headers: {
        "Content-type": "application/json"
    }
});