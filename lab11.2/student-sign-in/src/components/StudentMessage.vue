<template>
   <div v-show='student.name'>

          <div v-if='student.present' class='alert alert-success'>
            Welcome, {{student.name}}!
          </div>

          <div v-else class="alert alert-info">
            Goodbye, {{student.name}}. See you later!
          </div>

        </div>

</template>

<script>
// create and export compenets here
export default {
    name:'StudentMessage', 
    props:{
        student: Object
    }    
}
</script>


<style>
    /*Write any styles for this componet here*/
    
</style>