//https://api.imgur.com/oauth2/authorize?client_id=5dd709c9aa36d39&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE

import api from '../../api/imgur';
const state = {
  token:null
};

const getters={
  isLoggedIn : (state) =>!!state.token; // !! turn a value to boolean null = false..

};

const actions ={
  logout:({commit})=>{
    commit('setToken',null);
  },
  login: ()=>{
    api.login();
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
