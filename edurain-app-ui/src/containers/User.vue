<template>
<div>

  <button @click="selectComponent('parentInfo')">Parent Info</button>
  <button @click="selectComponent('personalInfo')">Personal Info</button>
  <button @click="selectComponent('signIn')">signIn</button>
  <button @click="selectComponent('education')">education</button>
  <button @click="selectComponent('activities')">activities</button>
  <button @click="selectComponent('accountInfo')">accountInfo</button>
  <button @click="selectComponent('signUp')">signUp</button>
   <keep-alive>
      <component :is="selectedComponent">
      </component>
      </keep-alive>
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
    import { mapState, mapMutations, mapActions } from 'vuex';

    export default {

       data() {
                return{

                }
           },

        components:{
            signIn: SignIn,
            signUp: SignUp,
            parentInfo: ParentInfo,
            personalInfo: PersonalInfo,
            education: Education,
            activities: StudentActivities,
            accountInfo: AccountInfo,

        },
        computed:
          mapState({
              selectedComponent: state => state.switchComponents.selectedComponent
          }),
          methods: mapActions([
              'selectComponent'
          ])

        }


</script>


<style>

</style>
