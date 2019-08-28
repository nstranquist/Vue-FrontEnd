<template>
    <div class="form">
        <h1 class="title-heading">Education </h1>
        <hr>
        <label for="graduationDate">High School Graduation</label>
        <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
        <!-- should this be text or  a select element -->
        <select  v-model="graduationDate">
            <option disabled value="" >Please select one</option>
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="math">SAT Math Score:</label>
    <input type="text" id="math" v-model="math">
    <label for="ebrw">SAT ( EBRW )</label>
    <input type="text" name="ebrw" v-model="ebrw">
        <label for="written">SAT Written Score</label>
     <input type="text" id="written"  v-model="written">
        <label for="act">ACT Score</label>
    <input type="text" id="act" v-model="act">
        <p>Currently Enrolled</p>
              <input type="radio" id="yes" value="yes"  v-model="enrolled" name="enrolled" checked>
            <label for="yes" class="radio-label">Yes</label>
            <input type="radio" id="no" value="no" v-model="enrolled" name="enrolled">
        <label for="no" class="radio-label">No</label>
        <p>Transfer Within A Year</p>
    <input type="radio" id="yes" value="yes" name="transfer"  v-model="transfer" checked>
    <label for="yes" class="radio-label">Yes</label>
    <input type="radio" id="no" value="no" v-model="transfer"  name="transfer">
    <label for="no" class="radio-label">No</label>

    <label for="college">College Graduation Year</label>
<!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
<select v-model="college">
    <option disabled value="" >Please select one</option>
    <option value="one">example #1</option>
    <option value="two">example #2</option>
    <option value="three">example #3</option>
    <option value="four">example #4</option>
</select>
    <button @click="setEducation" class="button">Submit</button>
     <button @click="goBack" class="button">Go Back</button>


    </div>
</template>

<script>
    export default {
        data() {
            return{
                graduationDate:'',
                math:'',
                ebrw:'',
               written:'',
               act:'',
               enrolled:'',
               transfer:'',
               college:'',

            }
        },
         computed: {
          selectedComponent(){
            return this.$store.getters.selectComponent;
          }
          },
        methods: {
            setEducation(){
                 // set data
                console.log('graduationDate' + this.graduationDate)
                console.log('math' + this.math)
                console.log('act' + this.act)
                console.log('ebrw' + this.ebrw)
                console.log('written' + this.written)
                console.log('enrolled' + this.enrolled)
                console.log('transfer' + this.transfer)
                console.log('college' + this.college)
                this.selectActivities();
            },
            selectActivities(){
            return this.$store.commit('switchComponent', 'activities');
          },
                goBack(){
               return this.$store.commit('switchComponent', 'personalInfo');
          }
        }
    }
</script>

<style>

</style>
