/*
 * clearImageMixin is a reusable object which prevents duplicate code
 * between CardFront.vue and CardBack.vue, which both use the clearImage
 * function.
 *
 * Mixins are a flexible way to distribute reusable functionalities for Vue components.
 * A mixin object can contain any component options. When a component uses a mixin, all
 * options in the mixin will be “mixed” into the component’s own options.
 */
export const clearImageMixin = {
  methods: {
    clearImage: function () {
      if (this.imageName !== '') {
        this.imageName = 'sunset.jpeg' // set default image
      }
    }
  }
}
