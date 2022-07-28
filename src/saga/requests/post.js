import axios from 'axios';

export default function postMyUser(params) {
    console.log("POST API CALL!!")
    return axios.request({
        method:"POST",
        url:"/film",
        data: {
            FilmDTO: params
        }
    })
}