<template>
<div>

  <button @click="selectParentInfo">Parent Info</button>
  <button @click=" selectPersonalInfo">Personal Info</button>
  <button @click=" selectSignIn">signIn</button>
  <button @click=" selectEducation">education</button>
  <button @click=" selectActivities">activities</button>
  <button @click=" selectAccountInfo">accountInfo</button>
  <button @click=" selectSignUp">signUp</button>
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
        computed: {
          selectedComponent(){
            return this.$store.getters.selectComponent;
          }
          },
          methods: {
         selectParentInfo(){
            return this.$store.commit('switchComponent', 'parentInfo');
          },
          selectPersonalInfo(){
            return this.$store.commit('switchComponent', 'personalInfo');
          },
            selectSignIn(){
            return this.$store.commit('switchComponent', 'signIn');
          },
          selectEducation(){
            return this.$store.commit('switchComponent', 'education');
          },
            selectActivities(){
            return this.$store.commit('switchComponent', 'activities');
          },
          selectSignUp(){
            return this.$store.commit('switchComponent', 'signUp');
          },
           selectAccountInfo(){
            return this.$store.commit('switchComponent', 'accountInfo');
          }
          }
        }


</script>


<style>

</style>
