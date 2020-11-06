<template>
  <div class="wyr">
    <h2>Please Make Your Choice</h2>
    <h3>{{ question }}</h3>
    
    <div>
      <label for="wizad"> {{ answer1 }}</label>
      <input type="radio" name="wizard" v-model ="choice" v-bind:value="answer1" v-on:change="changeMade">

      <label for="superhero">{{ answer2 }}</label>
      <input type="radio" name="superhero" v-model="choice" v-bind:value="answer2" v-on:change="changeMade">
    </div>

  </div>
    
</template>

<script>
export default {
  name: 'WouldYouRather',
  props: {    //  binds data form app.vue to use. 
    question: String,
    answer1: String,
    answer2: String
  },
  data(){
    return{
      choice: ''   // uses v-model to make radio button work. value of select = choice. 
    }
  },
  methods:{
    changeMade(){
      return this.$emit('answer-changed', this.choice)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 20px 20px 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
