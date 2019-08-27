<template>
<div>
    <!-- <edurain-student-activities></edurain-student-activities> -->
    <!-- <edurain-personal-info></edurain-personal-info> -->
        <!-- <eedurain-sign-in></edurain-sign-in> -->
     <edurain-sign-up></edurain-sign-up>
    <!-- <edurain-account-info></edurain-account-info> -->
    <!-- <edurain-parent-info></edurain-parent-info> -->
      <!-- <edurain-education></edurain-education> -->
</div>

</template>
<script>

    import PersonalInfo from '../views/PersonalInfo.vue'
    import AccountInfo from '../views/editable/AccountInfo.vue'
    import SignIn from '../views/SignIn.vue'
    import SignUp from '../views/SignUp.vue'
    import ParentInfo from '../views/ParentInfo.vue'
    import Education from '../views/Education.vue'
    import StudentActivities from '../views/StudentActivities.vue'

    export default {
        components:{
            'edurain-sign-in': SignIn,
            'edurain-sign-up': SignUp,            'edurain-parent-info':ParentInfo,
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
