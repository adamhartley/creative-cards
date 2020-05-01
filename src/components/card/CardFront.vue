<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
      <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload>
      <hr>
      <cc-text-input @displayTextChanged="textBoxValue2 = $event"></cc-text-input>
      <cc-text-input @displayTextChanged="textBoxValue3 = $event"></cc-text-input>
      <cc-section-completed></cc-section-completed>
    </div>
    <div class="col-sm-6 card card-display">
      <cc-text-output :display-text="textBoxValue1" :containerHeight="130"></cc-text-output>
      <cc-image-output :display-image="imageName" :containerHeight="350" :clearImageProp="clearImage"></cc-image-output>
      <cc-text-output :display-text="textBoxValue2" :containerHeight="130"></cc-text-output>
      <cc-text-output :display-text="textBoxValue3" :containerHeight="130"></cc-text-output>
    </div>
  </div>
</template>

<script>
  import TextInput from "./TextInput";
  import TextOutput from "./TextOutput";
  import ImageUpload from "./ImageUpload";
  import ImageOutput from "./ImageOutput";
  import SectionCompleted from "./SectionCompleted";

  export default {
    data: function () {
      return {
        textBoxValue1: '',
        textBoxValue2: '',
        textBoxValue3: '',
        imageName: ''
      }
    },
    methods: {
      clearImage: function () {
        if (this.imageName !== '') {
          this.imageName = 'sunset.jpeg' // set default image
        }
      }
    },
    components: {
      ccTextInput: TextInput,
      ccTextOutput: TextOutput,
      ccImageUpload: ImageUpload,
      ccImageOutput: ImageOutput,
      ccSectionCompleted: SectionCompleted
    }
  }
</script>

<style>
  .edit-area {
    background: #d2f9f9;
    padding: 20px;
    height: 800px;
  }

  .card-display {
    height: 800px;
    padding: 20px;
  }
</style>
