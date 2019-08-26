<template>
<div>
    <!-- <edurain-student-activities></edurain-student-activities> -->
    <edurain-personal-info></edurain-personal-info>
        <!-- <edurain-login></edurain-login> -->
    <!-- <edurain-account-info></edurain-account-info> -->
    <!-- <edurain-parent-info></edurain-parent-info> -->
      <!-- <edurain-education></edurain-education> -->
</div>

</template>
<script>

    import PersonalInfo from '../views/PersonalInfo.vue'
    import Login from '../views/AccountInfo.vue'
    import AccountInfo from '../views/AccountInfo.vue'
    import ParentInfo from '../views/ParentInfo.vue'
    import Education from '../views/Education.vue'
    import StudentActivities from '../views/StudentActivities.vue'

    export default {
        components:{
            'edurain-login': Login,
            'edurain-parent-info':ParentInfo,
            'edurain-personal-info':PersonalInfo,
            'edurain-education':Education,
            'edurain-student-activities':StudentActivities,
            'edurain-account-info':AccountInfo

          },
        data() {
                return{}
           }
    }
</script>


<style>

</style>
