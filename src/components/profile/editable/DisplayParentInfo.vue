<template>
    <div class="display-account-info">
        <h1 class="title-heading">Parent Information</h1>
        <hr>
    Parent Associations and Memberships:<br>
    <p>{{memberships}}</p>
     Current/Previous Employers:<br>
    <p>{{employer}}</p>
    Parent Military Experience:<br>
    <p>{{military}}</p>
    Parent Occupation:<br>
    <p>{{occupation}}</p>

    <button @click="editParentInfo" class="button">Edit</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return{
            }
        },
        computed:
         mapState({

            memberships: (state) => state.profile.parentInfo.memberships,
            employer: (state) => state.profile.parentInfo.employer,
            occupation: (state) => state.profile.parentInfo.occupation,
            military: (state) => state.profile.parentInfo.military,

         }),
         methods:{
                editParentInfo(){
                     this.$emit('editParentInfo', !this.show)
                }
         }
    }
</script>

<style>

</style>
