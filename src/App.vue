<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        <component :is="currentPage"></component> <!-- component listens for the $emit event and updates the currentPage data -->
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import CardFront from './components/card/CardFront.vue'
  import CardInsideLeft from './components/card/CardInsideLeft.vue'
  import CardInsideRight from './components/card/CardInsideRight.vue'
  import CardBack from './components/card/CardBack.vue'

  export default {
    data: function () {
      return {
        currentPage: 'cardFront' // displays the front of the card by default
      }
    },
    components: {
      navHeader: Header,
      cardFront: CardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: CardInsideRight,
      cardBack: CardBack
    }
  }
</script>

<style>
  body {
    font-family: Verdana, Geneva, sans-serif;
    color: #333;

  }

  a {
    cursor: pointer;
  }
</style>
