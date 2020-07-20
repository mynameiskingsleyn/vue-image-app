//https://api.imgur.com/oauth2/authorize?client_id=5dd709c9aa36d39&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

import api from '../../api/imgur';
import qs from 'qs';
//import  { router } from '../../main';
const state = {
  token:window.localStorage.getItem('imgur_token'),
};

const getters={
  isLoggedIn : (state) =>!!state.token // !! turn a value to boolean null = false..

};

const actions ={
  logout:({commit})=>{
    commit('setToken',null);
    //window.localStorage.setItem('imgur_token',null);
    window.localStorage.removeItem('imgur_token');
  },
  login: ()=>{
    api.login();
  },
  finalizeLogin:({commit},hash)=>{
    const query = qs.parse(hash.replace('#',''));
    commit('setToken',query.access_token);
    window.localStorage.setItem('imgur_token',query.access_token);
    //router.push('/');
    //console.log(state);
  }
};

const mutations = {
  setToken: (state,token) => {
    state.token = token;
  }
}

export default{
  state, getters,actions,mutations
};
