class AuthService {
    setData(data,uid){
        localStorage.setItem("uid",uid)
        localStorage.setItem("email",data.email)
        localStorage.setItem("name",data.name)
        localStorage.setItem("userType",data.userType)
        localStorage.setItem("isLogin",true)
    }

    getUserType(){
       return localStorage.getItem("userType")
    }
    getIsLogin(){
       return localStorage.getItem("isLogin")
    }
    getUserId () {
        return localStorage.getItem("uid")
    }

    clear(){
        localStorage.clear()
    }
}
export default new AuthService