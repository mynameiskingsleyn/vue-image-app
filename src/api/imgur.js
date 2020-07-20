import qs from 'qs';
const CLIENT_ID='5dd709c9aa36d39';
const ROOT_URL ='https://api.imgur.com';

export default {
  login(){
    const querystring ={
      client_id:CLIENT_ID,
      response_type:'token'
    };
    let url = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    window.location = url;
  }

}
