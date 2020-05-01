<template>
  <div class="row">
    <div class="form-check form-check-inline">
      <div class="form-check-label">
        <input type="checkbox" class="form-check-input" v-model="checked" @change="sectionCompleted($event)"> Mark section as completed
      </div>
    </div>
  </div>
</template>

<script>
  import {EventBus} from "../../main";

  export default {
    data: function () {
      return {
        checked: ''
      }
    },
    methods: {
      /*
       * Each time the user clicks on the check box, the boolean value is emitted
       * to the EventBus.vue
       */
      sectionCompleted: function () {
        EventBus.$emit('mark-as-completed', this.checked);
      }
    }
  }
</script>
