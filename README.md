# Creative Cards Vue.js App

The Creative Cards app allows a user to upload an image and add text to design a card. The application utilizes Google Firebase to upload
and store the images.

The app is composed of four basic Vue files:
* CardFront.vue
    * Allows a user to upload an image for the front panel of the card. The user can also enter custom text which will appear on the front of the
    card. Each section of text allows the user to configure the size, alignment and style of the input text.
* CardInsideRight.vue
    * Allows a user to enter custom text on the inside right panel of the card. The user can configure the size,
     alignment and style of the input text.
* CardInsideLeft.vue
    * The user can enter custom text which will appear on the inside left panel of the card. Each section of text allows the user to
    configure the size, alignment and style of the input text.
* CardBack.vue
    *  Allows a user to upload an image for the back panel of the card.

The progress bar makes use of an EventBus Vue instance, defined in the main.js file, which allows the application to share data with other
components which are not directly related.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
