<template lang="html">
  <div class="ui secondary pointing menu">
    <a class="active item">
      Image Storage
    </a>
    <div class="right menu">
      <div class="" v-if="signedIn">
        <a class="ui item">
          Logout
        </a>
      </div>
      <div class="" v-else>
        <a class="ui item">
          Login
        </a>
      </div>

  </div>
  </div>
</template>

<script>
export default {
  name:'AppHeader',
  data(){
    return{
      signedIn :false
    }
  }
}
</script>

<style lang="css">
</style>
