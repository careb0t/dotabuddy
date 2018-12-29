<template>
  <div id="app">
    <HeroList :heroList="heroList" :itemList="itemList" :heroSelected="heroSelected" :heroSelectedTrue="heroSelectedTrue" @clicked="heroSelectedCheck"/>
    <HeroGuide :heroList="heroList" :itemList="itemList" :heroSelected="heroSelected" :heroSelectedTrue="heroSelectedTrue" v-if="heroSelectedTrue" @closed="closeHeroGuide"/>
  </div>
</template>

<script>
import itemListFull from './assets/data/itemList.json'
import heroListFull from './assets/data/heroList.json'
import HeroList from './components/HeroList.vue'
import HeroGuide from './components/HeroGuide.vue'

export default {
  name: 'app',
  components: {
    HeroList,
    HeroGuide
  },

  data: function () {
    return {
      heroList: heroListFull,
      itemList: itemListFull,
      heroSelected: {},
      heroSelectedTrue: false,
    }
  },

  methods: {
    heroSelectedCheck: function (hero) {
      this.heroSelectedTrue = true;
      this.heroSelected = hero;
    },
    closeHeroGuide: function () {
      this.heroSelectedTrue = false;
      this.heroSelected = {};
    }

  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  height: 100vh;
  width: 100vw;
}

.blur {
  filter: blur(10px);
  -webkit-filter: blur(10px)
}

vue-particles {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>
