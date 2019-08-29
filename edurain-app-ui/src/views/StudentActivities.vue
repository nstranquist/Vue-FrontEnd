<template>
    <div class="form">
        <h1 class= "title-heading">Student Activities</h1>
        <hr>
        <label for="fraternity">Fraternity</label>
        <input type="text" id="fraternity" v-model="fraternity"><br>
        <label for="military">Military Experience</label>
        <!-- should this be text or select -->
        <select v-model="military">
                <option disabled value="" >Please select one</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="sorority">Sorority</label>
        <input type="text" id="sorority" v-model ="sorority">
        <label for="sports">Sports</label>
        <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
        <select v-model="sports">
        <!-- should this be text or select -->
                <option disabled value="" >Please select one</option>
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="perform">Performing Arts</label>
        <input type="text" id="perform"   v-model ="perform">
        <label for="employer">Current/Previous Employer</label>
        <input type="text" id="employer"  v-model ="employer">
    <button @click="submitStudentActivities" class="button">Save</button>

    </div>

</template>

<script>
    export default {
        data() {
            return{
                fraternity:'',
                military:'',
                sorority:'',
                sports:'',
                perform:'',
                employer:''
                }
        },
        methods:{
             submitStudentActivities(){
                                  // set data
                console.log('fraternity: ' + this.fraternity);
                console.log('military: ' + this.military);
                console.log('sorority: ' + this.sorority);
                console.log('sports: ' + this.sports);
                console.log('perform: ' + this.perform);
                console.log('employer: ' + this.employer);
            },

        }
    }
</script>

<style>

</style>
