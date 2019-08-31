<template>
    <div class="form">
        <h1 class="title-heading">Education </h1>
        <hr>
        <label for="graduationDate">High School Graduation</label>
        <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
        <!-- should this be text or  a select element -->
        <select  v-model="edu.graduationDate">
            <option disabled value="" >Please select one</option>
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>

        <label for="math">SAT Math Score:</label>
    <input type="text" id="math" v-model="edu.math">

    <label for="ebrw">SAT ( EBRW )</label>
    <input type="text" name="ebrw" v-model="edu.ebrw">

        <label for="written">SAT Written Score</label>
     <input type="text" id="written"  v-model="edu.written">

        <label for="act">ACT Score</label>
    <input type="text" id="act" v-model="edu.act">

        <p>Currently Enrolled</p>
              <input type="radio" id="yes" value="yes"  v-model="edu.enrolled" name="enrolled" checked>
            <label for="yes" class="radio-label">Yes</label>
            <input type="radio" id="no" value="no" v-model="edu.enrolled" name="enrolled">
        <label for="no" class="radio-label">No</label>

        <p>Transfer Within A Year</p>
    <input type="radio" id="yes" value="yes" name="transfer"  v-model="edu.transfer" checked>
    <label for="yes" class="radio-label">Yes</label>
    <input type="radio" id="no" value="no" v-model="edu.transfer"  name="transfer">
    <label for="no" class="radio-label">No</label>

    <label for="college">College Graduation Year</label>
<select v-model="edu.college">
    <option disabled value="" >Please select one</option>
    <option value="one">example #1</option>
    <option value="two">example #2</option>
    <option value="three">example #3</option>
    <option value="four">example #4</option>
</select>
    <button @click="setEducation" class="button">Save</button>

    </div>
</template>

<script>
    export default {
        data() {
            return{
               edu:{
                graduationDate:'',
                math:'',
                ebrw:'',
               written:'',
               act:'',
               enrolled:'',
               transfer:'',
               college:'',
            },
            education:this.$store._modules.root.state.profile.education

            }
        },
         computed: {

          },
        methods: {
            setEducation(){
                 // set data
                 this.$store.commit('updateEducation', this.edu)
                console.log(this.education )
            },
       }
    }
</script>

<style>

</style>
