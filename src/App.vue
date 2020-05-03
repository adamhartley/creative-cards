<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        <transition name="fade" mode="out-in">
          <!-- mode out-in removes the component BEFORE loading new component, prevents things from jumping around during transition -->
          <keep-alive> <!-- prevents data loss when changing components -->
            <component :is="currentPage"></component> <!-- component listens for the $emit event and updates the currentPage data -->
          </keep-alive>
        </transition>
        <cc-footer>
          <p class="text-center" slot="app-name">&copy; {{appName}}</p>
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link">Home</a></li>
              <li class="nav-item"><a class="nav-link">About Us</a></li>
              <li class="nav-item"><a class="nav-link">Contact Us</a></li>
            </ul>
          </nav>
        </cc-footer>
      </div>
    </div>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import FirebaseConfig from './firebaseConfig'
  import Header from './components/Header.vue'
  import CardFront from './components/card/CardFront.vue'
  import CardInsideLeft from './components/card/CardInsideLeft.vue'
  import CardInsideRight from './components/card/CardInsideRight.vue'
  import CardBack from './components/card/CardBack.vue'
  import Footer from './components/Footer.vue'

  export default {
    data: function () {
      return {
        currentPage: 'cardFront', // displays the front of the card by default
        appName: 'Creative Cards'
      }
    },
    components: {
      navHeader: Header,
      cardFront: CardFront,
      cardInsideLeft: CardInsideLeft,
      cardInsideRight: CardInsideRight,
      cardBack: CardBack,
      ccFooter: Footer
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

  /* Vue transaction classes adding fade effect
 */
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
</style>
