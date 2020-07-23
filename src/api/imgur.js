import qs from 'qs';
import axios from 'axios';
const CLIENT_ID='5dd709c9aa36d39';
const ROOT_URL ='https://api.imgur.com';
//https://api.imgur.com/3/account/me/images
//https://api.imgur.com/3/upload
export default {
  login(){
    const querystring ={
      client_id:CLIENT_ID,
      response_type:'token'
    };
    let url = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    window.location = url;
  },

  fetchImages(token){

      return axios.get(`${ROOT_URL}/3/account/me/images`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
  },

  uploadImages(token,images){
    const promises = Array.from(images).map(image=>{
      const formData = new FormData();
      formData.append('image',image);
      return axios.post(`${ROOT_URL}/3/image`,formData,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
    });
    return Promise.all(promises)
  }


}
