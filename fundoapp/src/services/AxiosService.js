import axios from "axios";

class AxiosService {
    postMethod(url,data){
        return axios.post(url,data)
    }
    postMethodForReset(url,data,config){
        return axios.post(url,data,config)
    }
    getMethod(url,config){
        return axios.get(url,config)
    }
}

export default AxiosService