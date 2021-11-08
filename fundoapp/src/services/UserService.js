import AxiosService from "./AxiosService";
const axiosService = new AxiosService();

let baseurl = 'http://fundoonotes.incubation.bridgelabz.com/api'

class UserService {
    SignUp(url,data){
        return axiosService.postMethod(`${baseurl}${url}`,data);
    }
    SignIn(url,data){
        return axiosService.postMethod(`${baseurl}${url}`,data);
    }
    Forgot(url,data){
        return axiosService.postMethod(`${baseurl}${url}`,data);
    }
    Reset(url,data,config){
        return axiosService.postMethodForReset(`${baseurl}${url}`,data,config);
    }
}

export default UserService