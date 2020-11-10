<template>
  <div id="app">
     <h1> Would You Rather...</h1>
     <h2>Please Make Your Choice</h2>
     <would-you-rather
     :key=option v-for="option in questions"
    v-bind:question="option.question" 
     v-bind:answer1='option.answer1'
     v-bind:answer2="option.answer2"
     v-on:answer-changed='answerChanged'    
     ></would-you-rather>

     <ul> You have chosen...
       <li  :key=selected v-for="selected in userSelectedMessage" v-if="selected" >{{selected}}</li>  
     </ul>


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
      questions:[
        {
          id:0,
          question: 'live in a triangle shaped house or a circle shaped house',
          answer1: 'Live in a triangle house',
          answer2: 'Live in a circle house',
        },
        {
          id:1,
          question:'be a wizard or a superhero?',
          answer1: 'Be a wizard',
          answer2: ' Be a superhero',
        },
        {
        id:2,
        question:'have an elephant-sized cat or a cat-sized eleaphant?',
        answer1: 'Have an elephant-sized cat',
        answer2: 'Have an cat-sized elepahnt'
        }
      ],
      userSelectedMessage: []
    }
  },
  methods:{
    answerChanged(choice){
      if ( choice == this.questions[0].answer1){
      this.$set(this.userSelectedMessage, 0, choice)
      }
      if (choice == this.questions[0].answer2) {
        this.$set(this.userSelectedMessage, 0, choice)
     }
      if ( choice == this.questions[1].answer1){
      this.$set(this.userSelectedMessage, 1, choice)
      }
      if ( choice == this.questions[1].answer2){
      this.$set(this.userSelectedMessage, 1, choice)
      }
      if ( choice == this.questions[2].answer1){
      this.$set(this.userSelectedMessage, 2, choice)
      }
      if ( choice == this.questions[2].answer2){
      this.$set(this.userSelectedMessage, 2, choice)
      }

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
  color: #82b0ec;
  background: rgb(0, 0, 0);
  margin-top: 60px;
  border-radius: 70px;
}
ul{
  list-style-position: inside;
  padding: 10px 10px 10px 10px;
  font-size: 50px;
}
li{
  padding: 0px 0px 0px 0px;
  font-size: 20px;
}
</style>
