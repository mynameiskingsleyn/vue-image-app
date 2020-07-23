<template lang="html">
   <div class="dropper">
     <input
     type="file" name="" value="" @change="uploadImages($event.target.files)"
     multiple eccept="image/*"
     />
     <span> Drag files here </span>
   </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:'UploadForm',
  methods:{
    ...mapActions(['uploadImages'])
  }
}
</script>

<style lang="css" scopped>
.dropper{
  margin-left:10%;
  height:30vh;
  width:60vw;
  border:2px dashed black;
  border-radius: 5px;
  display:flex;
  justify-content: center;
  align-items: center;
  position:relative;
}
.dropper:hover{
  background-color: #eeee
}
input {
  width:100%;
  height:30vh;
  position:absolute;
  opacity:0;
}
</style>
