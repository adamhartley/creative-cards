import Vue from 'vue'
import App from './App.vue'

/*
 * Global Vue component which can be used anywhere in the app
 */
Vue.component('text-input', {
  template: '<textarea :placeholder="textValue" @click="changeText"></textarea>',
  data: function () {
    return {
      textValue: 'Type here'
    }
  },
  methods: {
    changeText: function () {
      this.textValue = 'Text changed'
    }
  }
})

new Vue({
  el: '#app',
  // render: h => h(App),
})
