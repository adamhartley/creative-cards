<template>
  <div class="row">
    <div class="col-sm-12">
      <!-- adding span tags so that we can access the counter from JavaScript  -->
      <p>Completed: <span id="counter">0</span>/4</p>
      <progress value="0" max="100" id="cardProgress">0%</progress>
    </div>
  </div>
</template>

<script>
  import {EventBus} from "../../main";

  export default {
    created: function () {
      /*
       * $on is listening for the custom mark-as-completed event.
       * The mark-as-completed event is being passed to the EventBus
       * from the SectionCompleted.vue. Any time there is a change to this
       * event, it will trigger the callback unction
       */
      EventBus.$on('mark-as-completed', function (data) {
        if (data) {
          document.getElementById('counter').innerText++; // increment the counter if the checkbox was checked (true)
          document.getElementById('cardProgress').value += 25; // increment the progress bar by 25% if the checkbox was checked
        } else {
          document.getElementById('counter').innerText--; // decrement the counter if the checkbox was unchecked (false)
          document.getElementById('cardProgress').value -= 25; // decrement the progress bar by 25% if the checkbox was unchecked
        }
      })
    }
  }
</script>

<style scoped>
  progress {
    width: 100%;
  }
</style>
