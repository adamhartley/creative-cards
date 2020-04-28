<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <h4>Edit Text:</h4>
        <textarea class="form-control" cols="50" rows="4"
                  placeholder="Add text here!"
                  v-model="textBoxInput"
                  @keyup="textChanged">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        textBoxInput: ""
      }
    },
    methods: {
      /*
       * textChanged is called on each keyboard event, and emits the textBoxInput to the parent.
       * The custom event displayTextChanged can be added to parent components which can listen for
       * event changes.
       */
      textChanged: function () {
        this.$emit('displayTextChanged', this.textBoxInput)
      }
    }
  }
</script>
