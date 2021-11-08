import axios from "axios";

class AxiosService {
    postMethod(url,data){
        return axios.post(url,data)
    }
}

export default AxiosService