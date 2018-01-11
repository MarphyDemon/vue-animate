<template>
  <div>
      <hello-world :fathterfrom="msg"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'
export default {
  name: 'hello',
  components:{
      HelloWorld
  },
  data(){
      return {
        msg : 'your father'
      }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
