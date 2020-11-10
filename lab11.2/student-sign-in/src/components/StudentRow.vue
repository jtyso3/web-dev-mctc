<template>
    <tr v-bind:class='{ present: student.present, absent: !student.present}'>
        <td>{{ student.name}}</td>
        <td>{{ student.starId}}</td>
        <td> <input type="checkbox" v-bind:checked="student.present" v-on:change="studentarrivedOrLeft(student, $event.srcElement.checked)"></td>
        <td v-show="edit"> <img src="@/assets/icons8-delete-64.png" v-on:click='deleteStudent'></td>
    </tr>
</template>

<script>
export default {
    name: 'StudentRow',
    props:{
        student: Object,
        edit: false
    },

methods: {
    studentarrivedOrLeft(student, present) {
        this.$emit('student-arrived-or-left', student, present)
    },
    deleteStudent(student){
        if (confirm(`Delete ${student.name}?`)){     
        this.$emit('delete-student',this.student)
        }   
    }
    }
}
</script>

<style scoped>
.present{
  color: grey;
  font-style: italic;
}
.absent{
  color: black;
  font-weight: bold;
}
img {
    height: 25px;
}
</style>