import axios from 'axios';

export default function getMyUser2(paramdata) {
    console.log("SEARCH API CALL!!")
    return axios.request({
        method:"GET",
        url:"/film",
        params:{
            movie:paramdata.title,
            director:paramdata.director,
            release_year:paramdata.release_year,
            language:paramdata.language,
        }
       
    })
}




