<template lang="html">
  <div class="">
      please wait .....
  </div>
</template>

<script>
import  { router } from '../main';
import { mapActions } from 'vuex';
export default {
  name: 'AuthHandler',
  created(){
    this.finalizeLogin(window.location.hash);
  },
  mounted(){
    //const home = window.location.origin;
    //window.location = home;
    //console.log(window.location.origin);
    router.push('/');
  },
  methods:{
    ...mapActions(['finalizeLogin']),
  }
}
</script>

<style lang="css">
</style>
