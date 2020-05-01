<template>
  <footer>
    <!-- slot tells Vue.js that we want the content added within the cc-footer tags in App.vue to be displayed -->
    <slot name="app-name"></slot> <!-- example of a named slot, which corresponds with an attribute added to a tag in the parent -->
    <slot></slot>
  </footer>
</template>
