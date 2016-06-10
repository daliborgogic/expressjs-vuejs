'use strict'
const Vue = require('vue')
const App = require('./views/index.vue')

new Vue({
  el: 'body',
  components: {
    app: App
  }
})
