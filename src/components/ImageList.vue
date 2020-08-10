<template lang="html">
  <div class="">
    <div class="image-container" v-if="isLoggedIn">
      <img v-for="(image,index) in allImages" :src="image.link" :key="index" />
    </div>
    <div class="get-started" v-else>
      <h2 class="">
        Login to get started
      </h2>
    </div>

  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Image from './Image';
export default {
  name:'ImageList',
  methods:{
    ...mapActions(['fetchImages'])
  },
  created(){
    this.fetchImages();
  },
  computed:{
    ...mapGetters(['allImages','isLoggedIn']),
  },
  // components:{Image}
}
</script>

<style lang="css" scoped>
.image-container{
    column-count: 3;
    column-gap:0;
}
img {
  max-width: 100%;
  padding:5px;
}
.get-started{
  display:flex;
  justify-content: center;
  align-content: canter;

}
</style>
