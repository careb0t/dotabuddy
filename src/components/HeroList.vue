<template>
  <div class="heroTable" :class="{'blur': heroSelectedTrue}">
    <b-navbar fixed="top" toggleable type="light" variant="light">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand>DotaBuddy</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-link><a href="http://dotabuddy.xyz">Home</a></b-nav-link>
                <b-nav-link><a href="#">Companion</a></b-nav-link>
                <b-nav-link><a href="http://dotabuddy.xyz/tierlist">Tier List</a></b-nav-link>
                <b-nav-link><a href="http://dotabuddy.xyz/contact">Contact</a></b-nav-link>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <input type="text" v-model="query" placeholder="Find your hero" @focus="dimHeroes()" @blur="undimHeroes()" @keyup="selectedHero()">
    <ul>
      <li v-for="hero in heroList" :key="hero.localized_name">
        <img v-bind:src="imgHost + hero.img" class="heroPortrait" :class="{'selectedHero': selectedHeroPortrait.includes(imgHost + hero.img), 'dimmed': searching | heroSelectedTrue}" @click="loadHero(hero)">
      </li>
    </ul>
    <footer>
      <p>Copyright © 2018 DotaBuddy All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HeroList',

  props: {
    heroList: {
      type: Array
    },
    itemList: {
      type: Object
    },
    heroSelected: {
      type: Object
    },
    heroSelectedTrue: {
      type: Boolean,
      value: false,
    }
  },

  data: function () {
    return {  
      query: '',
      selectedHeroPortrait: [],
      searching: false,
      localHeroSelected: this.heroSelected,
      localHeroSelectedTrue: this.heroSelectedTrue,
      imgHost: 'http://api.opendota.com'
    }
  },

  methods: {
    dimHeroes: function () {
      this.searching = true;
      return;
    },

    undimHeroes: function () {
      this.searching = false,
      this.selectedHeroPortrait = [],
      this.query = ''
      return;
    },
    
    selectedHero: function () {
      this.selectedHeroPortrait = [];
      for (let i=0; i<this.heroList.length; i++) {
        if (this.heroList[i].localized_name.toLowerCase().includes(this.query.toLowerCase())) {
          this.selectedHeroPortrait.push(this.imgHost + this.heroList[i].img)
        } else {
          this.selectedHeroPortrait.splice(i, 1);
        }
      } return;
    },

    loadHero: function (hero) {
      this.localHeroSelected = hero;
      this.localHeroSelectedTrue = true;
      this.$emit('clicked', hero);
      return;
    }
  },

  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heroTable {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 100px 100px;
  background-image: url('../assets/background.png')
}

input {
  margin-bottom: 10px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 2px;
}
a {
  color: #42b983;
}
.heroPortrait {
  max-width: 80px;
  border-radius: 10px;
  border: 2px #2980B9 solid;
}

.heroPortrait:hover {
  transform: scale(1.1);
  z-index: 99;
}

.dimmed {
  filter: brightness(30%);
  -webkit-filter: brightness(30%)
}

.selectedHero {
  z-index: 100;
  filter: brightness(100%);
  -webkit-filter: brightness(100%)
}

.blur {
  filter: blur(10px);
  -webkit-filter: blur(10px)
}

input {
  background-color:rgba(0, 0, 0, 0.589);
  border: #2980B9 3px solid;
  border-radius: 15px;
  color: rgb(139, 202, 241);
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  font-size: 1.5rem;
}

footer {
  position: absolute;
  bottom: 10px;
  color: rgb(104, 104, 104);
}

nav {
  background: transparent !important;
}

.navbar-brand {
  color: white !important;
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
}

b-nav-link {
  color: white !important;
  font-family: "Exo 2", sans-serif;
  font-size: 1.2rem;
  padding-right: 30px;
}

</style>
