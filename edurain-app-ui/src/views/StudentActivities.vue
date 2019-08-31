<template>
    <div class="form">
        <h1 class= "title-heading">Student Activities</h1>
        <hr>
        <label for="fraternity">Fraternity</label>
        <input type="text" id="fraternity" v-model="activities.fraternity"><br>
        <label for="military">Military Experience</label>
        <!-- should this be text or select -->
        <select v-model="activities.military">
                <option disabled value="" >Please select one</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="sorority">Sorority</label>
        <input type="text" id="sorority" v-model ="activities.sorority">
        <label for="sports">Sports</label>

        <select v-model="activities.sports">
        <!-- should this be text or select -->
                <option disabled value="" >Please select one</option>
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="perform">Performing Arts</label>
        <input type="text" id="perform"   v-model ="activities.perform">
        <label for="employer">Current/Previous Employer</label>
        <input type="text" id="employer"  v-model ="activities.employer">
    <button @click="submitStudentActivities" class="button">Save</button>

    </div>

</template>

<script>
    export default {
        data() {
            return{
                activities: {
                fraternity:'',
                military:'',
                sorority:'',
                sports:'',
                perform:'',
                employer:''
                },
                studentActivities: this.$store._modules.root.state.profile.studentActivities
            }
        },
        methods:{
             submitStudentActivities(){
                                  // set data
                 this.$store.commit('updateStudentActivities', this.activities)
               console.log(this.studentActivities )
            },

        }
    }
</script>

<style>

</style>
