<template lang="html">
  <div class="">
    <img v-for="(image,index) in allImages" :src="image.link" :key="index" />
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
    ...mapGetters(['allImages']),
  },
  // components:{Image}
}
</script>

<style lang="css">
</style>
