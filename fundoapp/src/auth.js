class Auth {
    constructor() {
        if(localStorage.getItem("id")){
            this.authenticated = true
        }
        else
            this.authenticated = false
    }
    login(cb){
        if(localStorage.getItem("id")){
            this.authenticated = true
            cb()
        }
    }
    logout(cb){
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }
}

export default new Auth()