<template>
  <div id="app">
    <new-student-form v-on:student-added='newStudentAdded'></new-student-form>
    <student-table 
    v-bind:students='students' 
    v-on:student-present='studentArrivedOrLeft'
    v-on:delete-student="studentDelete"
    ></student-table>
    <student-message v-bind:student="mostRecentStudent"></student-message>
  </div>
</template>

<script>
import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data(){
    return{
      students:[],
      mostRecentStudent:{}
    }
  },
  methods:{
    newStudentAdded(student){
      this.students.push(student)
      this.students.sort((s1,s2)=>{
        return s1.name.toLowerCase() > s2.name.toLowerCase() ? 1:-1
      })
    },
    studentArrivedOrLeft(student, present){
      // find student in this.student, set present value
      // find returns undefiened if no match
      let updateStudent = this.students.find( (s) =>{
        if (s.name == student.name && s.starId){
          return true;
        }
      })
      if (updateStudent) {
        updateStudent.present = present
        this.mostRecentStudent = student
      }
    },
    studentDelete(student) {
      this.students =this.students.filter( (s) => {   //  filter returns array of students which = true
        if (s != student ){
          return true
        }
      })
      this.mostRecentStudent={}   //  clears welcome/goodbye message.
    }
  }
}
</script>

