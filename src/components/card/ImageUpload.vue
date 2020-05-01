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
      <button type="button" id="setImageButton" style="display:none" @click="setImage">Set Image</button>
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

        // if more than one image is uploaded, reset the button to hidden
        document.getElementById('setImageButton').style.display = 'none';

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
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('progressBar').value = progress;

          // only display the set image button AFTER the image has finished uploading
          if (progress === 100) {
            document.getElementById('setImageButton').style.display = 'inline-block';
          }
        })

      },
      setImage: function () {
        // send file name to parent component, CardFront.vue only after the image has finished uploading, and the button is clicked
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
