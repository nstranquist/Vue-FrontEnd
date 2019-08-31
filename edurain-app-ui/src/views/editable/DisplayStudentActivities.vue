<template>
    <div class="display-account-info">
        <h1 class="title-heading">Student Activities</h1>
        <hr>
    Fraternity:<br>
    <p>{{fraternity}}</p>
     Military Experience:<br>
    <p>{{military}}</p>
    Sorority:<br>
    <p>{{sorority}}</p>
   Sports:<br>
<p>{{sports}}</p>
    Performing Arts:<br>
   <p>{{perform}}</p>
   Current/Previous Employer:<br>
   <p>{{employer}}</p>

    <!-- <button type="submit" class="button">Edit</button> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data() {
            return{

            }
        },
        computed:
              mapState ({

                fraternity: state => state.profile.studentActivities.fraternity,
                military: state => state.profile.studentActivities.military,
                sorority: state => state.profile.studentActivities.sorority,
                sports: state => state.profile.studentActivities.sports,
                perform: state => state.profile.studentActivities.perform,
                employer: state => state.profile.studentActivities.employer,

                })

    }
</script>

<style>

</style>
