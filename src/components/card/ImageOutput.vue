<template>
  <div class="img-container"
       :style="styleObject"
       @mouseover="showOptions = true"
       @mouseleave="showOptions = false">
    <transition
      enter-active-class="custom-enter-active"
      leave-active-class="custom-leave-active">
      <button type="button"
              class="btn btn-outline-danger btn-sm"
              v-show="showOptions"
              @click="clearImageProp">
        Remove Image
      </button>
    </transition>
    <img id="outputImage">
  </div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    props: {
      displayImage: {
        type: String
      },
      containerHeight: {
        type: Number,
        default: 200
      },
      clearImageProp: Function
    },
    data: function () {
      return {
        showOptions: false
      }
    },
    watch: {
      displayImage: function () {
        // download the image inside of Firebase
        let storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage);
        storageRef.getDownloadURL().then(function (url) {
          let img = document.getElementById('outputImage');
          img.src = url;
          setDraggable();
        });
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

  /*
   * Utilizing jQuery to add draggable functionality to image
   */
  function setDraggable() {
    // eslint-disable-next-line no-undef
    $('#outputImage').draggable();
  }
</script>

<style>
  .img-container {
    border: 1px dotted grey;
    overflow: hidden;
    margin: 5px 0;
  }

  button {
    position: absolute;
    z-index: 1; /* allow button to sit ontop of image */
  }

  img {
    width: 130%;
  }
</style>
