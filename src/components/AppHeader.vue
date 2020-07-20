<template lang="html">
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Storage
    </router-link>
    <div class="right menu">
      <div class="horizontal" v-if="isLoggedIn">
        <router-link to="/" class="item" >Galery</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <div class="" v-else>
        <a class="ui item" @click="login">
          Login
        </a>
      </div>

  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name:'AppHeader',
  data(){
    return{

    }
  },
  methods : mapActions(['login','logout']),
  // methods:{
  //   ...mapActions(['login'])
  // }
  computed:{
    ...mapGetters(['isLoggedIn']),
  }


}
</script>

<style lang="css" scoped>
  .horizontal{
    display:flex;
    flex-direction:row;
  }
</style>
