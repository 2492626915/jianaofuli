<template>
  <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
  import Answer from '../answer'
    export default {
        name: "home",
      components:{
          Answer
      }
    }
</script>

<style scoped>

</style>
