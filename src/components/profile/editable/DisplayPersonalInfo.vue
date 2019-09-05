<template>
  <div class="display-account-info">
    <h1 class="title-heading">Personal Information</h1>
    <hr />Birthday:
    <br />
    <p>{{birthday}}</p>Gender:
    <br />
    <p>{{gender}}</p>Citizenship:
    <br />
    <p>{{citizenship}}</p>Disabilities:
    <br />
    <p>{{disabilities}}</p>Heritage:
    <br />
    <p>{{heritage}}</p>Religion:
    <br />
    <p>{{religion}}</p>Possible Majors:
    <br />
    <p>{{majors}}</p>Career Objectives:
    <br />
    <p>{{career}}</p>Academic Honors:
    <br />
    <p>{{honors}}</p>Educational Experiences:
    <br />
    <p>{{education}}</p>
    <button @click="editPersonalInfo" class="button">Edit</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState({
    gender: state => state.profile.personalInfo.gender,
    birthday: state => state.profile.personalInfo.birthday,
    citizenship: state => state.profile.personalInfo.citizenship,
    heritage: state => state.profile.personalInfo.heritage,
    religion: state => state.profile.personalInfo.religion,
    majors: state => state.profile.personalInfo.majors,
    career: state => state.profile.personalInfo.career,
    honors: state => state.profile.personalInfo.honors,
    education: state => state.profile.personalInfo.education,
    disabilities: state => state.profile.personalInfo.disabilities
  }),
  methods: {
    editPersonalInfo() {
      //update method
      this.$emit("editPersonalInfo", !this.show);
    }
  }
};
</script>

<style>
</style>
