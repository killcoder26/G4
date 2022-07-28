import axios from 'axios';

export default function getMyUser() {
    console.log("GET API CALL!!")
    return axios.request({
        method:"GET",
        url:"/film",
       
    })
}