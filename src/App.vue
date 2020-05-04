<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        <div id="instructions" class="text-center italic">
          <div class="row">
            <div class="col-sm-6">
              <p><em>&larr; Make changes in the edit card area below:</em></p>
            </div>
            <div class="col-sm-6">
              <p><em>And they will show on the card &rarr;</em></p>
            </div>
          </div>
        </div>
        <transition
          name="fade"
          mode="out-in"
          @enter="enter">
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
    methods: {
      /*
       * The instructions are shown to the user the when they first view the site on the CardFront.vue.
       * After that, the instructions are hidden.
       */
      enter: function (el) {
        document.getElementById('instructions').style.display = "none";
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

  /* CSS animations for remove image button */
  .custom-enter-active {
    animation: scale-in 0.5s;
  }

  .custom-leave-active {
    animation: scale-out 0.5s;
  }

  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes scale-out {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
