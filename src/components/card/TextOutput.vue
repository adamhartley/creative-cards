<template>
  <div @mouseover="showOptions = true"
       @mouseleave="showOptions = false">
    <form class="small" v-show="showOptions">
      <!-- Font size selection  -->
      <label for="selectBox">&nbsp;Font Size:</label>
      <select class="input-small" id="selectBox" v-model="setFontSize">
        <option value="42">42px</option>
        <option value="48">48px</option>
        <option value="56">56px</option>
        <option value="64">64px</option>
      </select>
      <!--  Text alignment selection   -->
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" value="left" v-model="setTextAlign"> Left
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" value="center" v-model="setTextAlign"> Center
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" value="right" v-model="setTextAlign"> Right
        </label>
      </div>
      <!-- Text styling selection  -->
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="setBold"> Bold
        </label>
      </div>
      <div class="form-check form-check-inline">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="setItalic"> Italic
        </label>
      </div>
    </form>
    <p :style="styleObject"
       :class="{bold: setBold, italic: setItalic}">
      {{displayText}}
    </p>
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
    data: function () {
      return {
        showOptions: false,
        setFontSize: '',
        setTextAlign: '',
        setBold: false,
        setItalic: false
      }
    },
    computed: {
      styleObject: function () {
        return {
          // adds CSS style property and is used dynamically in the template
          fontSize: this.setFontSize + 'px',
          height: this.containerHeight + 'px',
          textAlign: this.setTextAlign,
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

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  form {
    position: absolute;
    border-bottom: 1px dotted grey;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }

  select {
    height: 40%;
  }
</style>
