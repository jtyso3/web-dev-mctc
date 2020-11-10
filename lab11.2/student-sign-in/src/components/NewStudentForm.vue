<template>

        <!-- Write template here-->
    <div id="app">

        <div class="alert alert-danger" v-show='errors.length > 0'>
          <li :key='error' v-for='error in errors'>{{error}}</li>
        </div>

        <div class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student</h4>

            <div class="form-group">
                <label for="name">Name</label>
                <input v-model.trim()= 'newStudent' id="name" class="form-control"> <!-- on v attribute you can include trim() nethod-->
            </div>
            <div class="form-group">
                <label for="starID">Star ID</label>
                <input v-model.trim()= 'newStarId' id="starID" class="form-control">
            </div>
            <button @click='addStudent' class="btn btn-primary">Add</button>
        </div>
    </div>
</template>

<script>
// create and export compenets here
export default {
    name:'NewStudentForm',
    data(){
        return{
            newStudent:'',
            newStarId:"",
            errors:[],
            students:[]
        }
    },
    methods:{
        addStudent(){
            this.errors = []

             if (!this.newStudent) {
              this.errors.push('Please Enter Student Name.');
            }

            if (!this.newStarId) {
              this.errors.push('Please Enter Star ID.')
            }
            if (this.errors.length == 0) {   //  empty strings are falsely in JavaScript
            let student = {name: this.newStudent,starId: this.newStarId, present: false}
            this.students.push(student)
            this.$emit('student-added', student)
            this.newStudent = ''
            this.newStarId = ''
            }
        },
    }        
}
    
</script>


<style>
    /*Write any styles for this componet here*/

</style>