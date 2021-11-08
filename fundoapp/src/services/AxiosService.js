import axios from "axios";

class AxiosService {
    postMethod(url,data){
        return axios.post(url,data)
    }
    postMethodForReset(url,data,config){
        return axios.post(url,data,config)
    }
}

export default AxiosService