<template>
    <div class="form">
    <h1 class="title-heading">Parent Information</h1>
    <hr>
        <label for="memberships">Parent Associations and Memberships</label>
    <input type="text" id="memberships" v-model="info.memberships">
    <!-- <p>May be a textarea</p> -->
        <label for="employer">Current/Previous Employers</label>
    <input type="text" id="employer" v-model="info.employer">
        <label for="military">Parent Military Experience</label>
<!-- <input type="text" name="name" placeholder="Please enter first and last name"> -->
        <!-- should this be text or select -->
<select id="military" v-model="info.military">
    <option disabled value="" >Please select one</option>
    <option value="one">example #1</option>
    <option value="two">example #2</option>
    <option value="three">example #3</option>
    <option value="four">example #4</option>
</select>
        <label for="occupation">Parent Occupation</label>
    <input type="text" id="occupation"  v-model="info.occupation">

    <button @click="setParentInfo" class="button">Save</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                info:{
                memberships: '',
                employer: '',
                occupation: '',
                military:''
                },
                parentInfo: this.$store._modules.root.state.profile.parentInfo
            }
        },        computed: {
          },
        methods: {
            setParentInfo() {
                // set data

              this.$store.commit('updateParentInfo', this.info)
               console.log(this.parentInfo )
            },

        }
    }
</script>

<style>

</style>
