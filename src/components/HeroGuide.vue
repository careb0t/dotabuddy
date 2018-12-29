<template>
  <div class="heroGuide">
    <b-container fluid>
      <b-row>
        <b-col md="1" offset-md="11">
          <font-awesome-icon icon="times" size="lg" color="grey" class="float-right" @click="closeHeroGuide()"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3 class="heroGuideTitle">{{heroSelected.localized_name}}</h3>
          <h4 class="heroGuideSubtitle">{{heroSelected.roles.join(", ")}}</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" offset-md="1">
          <img class="heroImage" :src="imgHost + heroSelected.img" alt="">
        </b-col>
        <b-col>
          <h4>Common Items</h4>
          <img class="commonItem" :src="heroSelected.common_items[0]" alt="">
          <img class="commonItem" :src="heroSelected.common_items[1]" alt="">
          <img class="commonItem" :src="heroSelected.common_items[2]" alt="">
          <img class="commonItem" :src="heroSelected.common_items[3]" alt="">
          <img class="commonItem" :src="heroSelected.common_items[4]" alt="">
          <img class="commonItem" :src="heroSelected.common_items[5]" alt="">
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" offset-md="1">
          <p class="heroStats"><img src="https://www.dotabuff.com/assets/hero_str-eac64b6191e66b593d7f1ac81bb262afed6565794d8f9014d66b0cbc99fa3d01.png" alt=""> {{heroSelected.base_str}} + {{heroSelected.str_gain}}<br></p>
          <p class="heroStats"><img src="https://www.dotabuff.com/assets/hero_agi-693306f455235ff5628c3429a80f2dc7e7795c013c540832dbba61ab691a73b5.png" alt=""> {{heroSelected.base_agi}} + {{heroSelected.agi_gain}}<br></p>
          <p class="heroStats"><img src="https://www.dotabuff.com/assets/hero_int-76ea2af3bdf60a1c92d82a1fc0845d47a071cfacfca111aa2d5e43fbae01b580.png" alt=""> {{heroSelected.base_int}} + {{heroSelected.int_gain}}<br></p>
        </b-col>
        <b-col>
          <h4>Suggested Skill Build</h4>
          <h1 class=heroSkills>{{heroSelected.skill_build}}</h1>
        </b-col>
      </b-row>
      <b-row class="tableContainer">
        <table>
          <tr>
            <td class="blue">Base Attack</td>
            <td class="blue">Attack Range</td>
            <td class="blue">Health Regen</td>
            <td class="blue">Base Mana</td>
            <td class="blue">Mana Regen</td>
            <td class="blue">Move Speed</td>
          </tr>
          <tr>
            <td>{{heroSelected.base_attack_min + heroSelected.base_str}} - {{heroSelected.base_attack_max + heroSelected.base_str}}</td>
            <td>{{heroSelected.attack_range}}</td>
            <td>{{heroSelected.base_health}}</td>
            <td>{{heroSelected.base_mana}}</td>
            <td>{{heroSelected.base_mana_regen}}</td>
            <td>{{heroSelected.move_speed}}</td>
          </tr>
        </table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeroGuide',
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
      imgHost: 'http://api.opendota.com',
      commonItems: []
    }
  },

  methods: {
    closeHeroGuide: function () {
      this.$emit('closed')
    } 
  },

  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Orbitron|Exo+2');

.heroGuide {
  background-color: rgba(8, 0, 51, 0.288);
  width: 80vw;
  height: 70vh;
  z-index: 101;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
  border-radius: 15px;
  border: #2980B9 3px solid;
  padding: 10px 10px;
  margin: 0 auto;
}

.heroImage {
  margin-bottom: 10px;
  border: #2980B9 1px solid;
}

.heroGuideSubtitle {
  padding-bottom: 20px;
}

h3 {
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: white;
}

h4 {
  font-family: 'Exo 2', sans-serif;
  color: white;
}

h1 {
  text-align: left;
}

.heroSkills {
  text-align: center;
  font-size: 4rem;
  color: #2980B9
}

h2 {
  text-align: left;
}

.closeButton {
  text-align: center;
}

.commonItem {
  margin-right: 5px;
  border: 1px #2980B9 solid;
}

.heroStats img {
  margin-right: 10px;
}

.heroStats {
  color: white;
  font-family: 'Exo 2', sans-serif
}

.tableContainer {
  width: 100%
}

table {
  text-align: center;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
}

td {
  padding: 0 15px;
  color: white;
}

.blue {
  color: #2980B9;
  font-size: 1.5rem;
}
</style>
