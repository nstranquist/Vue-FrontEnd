<template>
    <div class="form">
    <h1 class="title-heading">Parent Information</h1>
    <hr>
        <label for="memberships">Parent Associations and Memberships</label>
    <input type="text" id="memberships" v-model="memberships">
    <!-- <p>May be a textarea</p> -->
        <label for="employer">Current/Previous Employers</label>
    <input type="text" id="employer" v-model="employer">
        <label for="military">Parent Military Experience</label>
<!-- <input type="text" name="name" placeholder="Please enter first and last name"> -->
        <!-- should this be text or select -->
<select id="military" v-model="military">
    <option disabled value="" >Please select one</option>
    <option value="one">example #1</option>
    <option value="two">example #2</option>
    <option value="three">example #3</option>
    <option value="four">example #4</option>
</select>
        <label for="occupation">Parent Occupation</label>
    <input type="text" id="occupation"  v-model="occupation">

    <button @click="setParentInfo" class="button">Save</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                memberships: '',
                employer: '',
                occupation: '',
                military:''
            }
        },        computed: {
          },
        methods: {
            setParentInfo() {
                                  // set data
                console.log('memberships:' + this.memberships);
                console.log('employer: ' + this.employer);
                console.log('occupation: ' + this.occupation);
                 console.log('military: ' + this.military);
            },

        }
    }
</script>

<style>

</style>
