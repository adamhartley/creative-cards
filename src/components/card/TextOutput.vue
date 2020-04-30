<template>
  <div>
    <p :style="styleObject">{{displayText}}</p>
  </div>
</template>

<script>
  export default {
    /*
     * Will receive prop values from parent vue, passed from CardFront.vue through to displayText
     */
    props: {
      // performing validation on properties
      displayText: [String],
      containerHeight: {
        type: Number,
        default: 200
      }
    },
    computed: {
      styleObject: function () {
        return {
          // adds CSS style property and is used dynamically in the template
          height: this.containerHeight + 'px'
        }
      }
    }
  }
</script>

<!-- scoped prevents the CSS from being applied to other vue components -->
<style scoped>
  p {
    font-family: 'Tangerine', cursive;
    font-size: 42px;
    line-height: 42px;
    text-shadow: 2px 2px 2px #aaa;
    color: #4d4d4d;
    margin: 5px 0;
    border: 1px dotted grey;
    white-space: pre-line;
    overflow: hidden;
  }
</style>
