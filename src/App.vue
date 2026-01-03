<template>
  <div id="app">
    <!-- Particles background -->
    <vue-particles
      id="particles"
      color="#bb86fc"
      linesColor="#bb86fc"
      :particleOpacity="0.8"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="0.5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    />

    <!-- App content -->
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />

    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header,
    Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  'img/projects/project-1-icon.png',
  'img/projects/project-2-icon.png',
  'img/projects/project-3-icon.png'
]);
</script>

<style lang="less">
@import './css/projects.less';
@import './css/variables.less';

html,
body {
  margin: 0;
  background-color: @bodyBgColor;
}

/* Particles container */
#particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

#app {
  position: relative;
  z-index: 1;
  background-color: transparent;
  color: @textColor;
  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}

a:hover,
.router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px;
  line-height: 1.1em;
}

.main {
  padding: 12px;
}

@media only screen and (min-width: 620px) {
  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0 40px 40px 180px;
  }

  .main,
  .header,
  .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Route fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
