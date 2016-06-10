<style lang="stylus">
  body 
    padding: 50px
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif
  h1
    color: #00B7FF
</style>

<template lang="pug">
  div
    h1 {{ msg }}
    p Welcome to {{ msg }}
</template>

<script>
  export default {
    data () {
      return {
        msg: msg
      }
    }
  }
</script>
