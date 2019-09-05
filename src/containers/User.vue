<template>
  <div>
    <!--Replace these with custom UI-->
    <button @click="selectComponent('parentInfo')">Parent Info</button>
    <button @click="selectComponent('personalInfo')">Personal Info</button>
    <button @click="selectComponent('signIn')">signIn</button>
    <button @click="selectComponent('education')">education</button>
    <button @click="selectComponent('activities')">activities</button>
    <button @click="selectComponent('accountInfo')">accountInfo</button>
    <button @click="selectComponent('signUp')">signUp</button>
    <!---->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>


<script>
// import components
import PersonalInfo from "../components/profile/PersonalInfo.vue";
import ParentInfo from "../components/profile/ParentInfo.vue";
import Education from "../components/profile/Education.vue";
import StudentActivities from "../components/profile/StudentActivities.vue";
import AccountInfo from "../components/profile/editable/AccountInfo.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
// import vuex
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  components: {
    signIn: SignIn,
    signUp: SignUp,
    parentInfo: ParentInfo,
    personalInfo: PersonalInfo,
    education: Education,
    activities: StudentActivities,
    accountInfo: AccountInfo
  },
  computed: mapState({
    selectedComponent: state => state.switchComponents.selectedComponent
  }),
  methods: mapActions(["selectComponent"])
};
</script>
