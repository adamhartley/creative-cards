<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Upload image:</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
      </div>
      <progress value="0" max="100" id="progressBar"></progress>
      <br>
      <img id="image">
      <button type="button" id="setImageButton">Set Image</button>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase';

  export default {
    data: function () {
      return {
        file: ''
      }
    },
    methods: {
      uploadFile: function (event) {
        this.file = event.target.files[0];
        // store the image inside of Firebase
        let storageRef = Firebase.storage().ref('user_uploads/' + this.file.name);
        let upload = storageRef.put(this.file);

        // create a thumbnail preview
        let reader = new FileReader()
        reader.readAsDataURL(this.file)
        reader.onload = function (e) {
          document.getElementById('image').src = e.target.result
        }

        // progress bar
        upload.on('state_changed', function (snapshot) {
          // calculate percentage of progress for file upload, and assign to progressBar
          document.getElementById('progressBar').value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        })

        // send file name to parent component, CardFront.vue
        this.$emit('displayImageChanged', this.file.name)
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 200px;
  }
</style>
