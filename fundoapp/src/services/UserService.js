import AxiosService from "./AxiosService";
const axiosService = new AxiosService();

let baseurl = 'http://fundoonotes.incubation.bridgelabz.com/api'

class UserService {
    SignUp(url,data){
       return axiosService.postMethod(`${baseurl}${url}`,data);
    }
}

export default UserService