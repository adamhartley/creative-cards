<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
      <cc-section-completed></cc-section-completed>
    </div>
    <div class="col-sm-6 card card-display">
      <cc-text-output :display-text="textBoxValue1" :containerHeight="750"></cc-text-output>
    </div>
  </div>
</template>

<script>
  import TextInput from "./TextInput";
  import TextOutput from "./TextOutput";
  import SectionCompleted from "./SectionCompleted";

  export default {
    data: function () {
      return {
        textBoxValue1: ''
      }
    },
    components: {
      ccTextInput: TextInput,
      ccTextOutput: TextOutput,
      ccSectionCompleted: SectionCompleted
    }
  }

</script>

<style>
</style>
