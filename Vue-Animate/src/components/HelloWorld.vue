<template>
  <div class="hello">
    <h1 v-text="title"></h1>
    <button v-on:click="clickBtn"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'incomponent a',
    }
  },
  props:['fathterfrom'],
  methods: {
    clickBtn: function () {
      console.log(this.fathterfrom);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: blue;
}
button{
  width: 100px;
  height: 20px;
  display: inline-block;
  background: green;
}
</style>
