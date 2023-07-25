import axios from './custom-axios';


const signInApi = (username, password) => {
        return axios.post("/auth/login", {username, password})

}
export {signInApi};