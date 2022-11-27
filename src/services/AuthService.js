import axios from "axios";

const API_URL = "http://localhost:3004/users/";

const login = async (username, password) => {
    const response = await axios
        .post(API_URL , {
            username,
            password
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const logout = () => {
    localStorage.removeItem("user");
}


const register = (username, email, password) => {
    axios .post(API_URL ,{
            username,
            email,
            password
        });
}


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));;
}



const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService