import api from '../../api/imgur';
import {router} from '../../main';
//import images from './auth';

const state ={
  images:[]
};

const getters ={
  allImages: state => state.images
}

const actions ={
  async fetchImages({commit, rootState}){
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages',response.data.data)
    console.log(response);
  },
  /* eslint-disable */
  async uploadImages({rootState},images){
    //items = images.target
    const {token} = rootState.auth; // get the token from auth module//
    await api.uploadImages(images,token);
    // redirect back to images
    router.push('/');

    //console.log(images);
  }
  /* eslint-enable */
};

const mutations ={
  setImages:(state,images)=> {
    state.images = images;
  }
}
export default{
  state, getters,actions,mutations
};
