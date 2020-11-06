<template>
  <div id="app">
     <h1> Would You Rather...</h1>
     <would-you-rather v-bind:question="wyrQuestion" 
     v-bind:answer1="wyrAnswer1"
     v-bind:answer2="wyrAnswer2"
     v-on:answer-changed='answerChanged'    

     ></would-you-rather>

     <p> {{ userSelectedMessage }}</p>


  </div>
</template>

<script>
import WouldYouRather from './components/WouldYouRather.vue'

export default {
  name: 'App',
  components: {
    WouldYouRather
  },
  data(){
    return{
    wyrQuestion: 'Would you rather be a wizard or a superhero?',
    wyrAnswer1: 'Wizard',
    wyrAnswer2: 'Superhero',
    userSelectedMessage: ''
    }
  },
  methods:{
    answerChanged(choice){
      this.userSelectedMessage = `Thanks! You chose ${choice}.`
    }
  }
}
</script>

<style>
body{
  background: lightcoral;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f115;
  background: rgb(0, 0, 0);
  margin-top: 60px;
  border-radius: 70px;
}
</style>
