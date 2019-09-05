<template>
  <div>
    <div class="form" v-show="show">
      <h1 class="title-heading">Personal Information</h1>
      <hr />
      <label for="birthday">Birthday</label>
      <div>
        <select v-model="selectedMonth" class="birthday">
          <option disabled value>Month</option>
          <option v-for="(month, index) in months" :key="index" :value="month">{{month}}</option>
        </select>

        <select v-model="selectedDay" class="birthday">
          <option disabled value>Day</option>
          <option v-for="(i, index) in 31" :key="index" :value="i">{{i}}</option>
        </select>

        <select v-model="selectedYear" class="birthday">
          <option disabled value>Year</option>
          <option v-for="(year, index) in years" :key="index" :value="year">{{year}}</option>
        </select>
      </div>

      <p>Gender</p>
      <select v-model="info.gender">
        <option disabled value>Please Select One</option>
        <option v-for="(gender, index) in genders" :key="index" :value="gender">{{gender}}</option>
      </select>

      <label for="citizensihip">Citizenship</label>
      <!-- should this be text or  a select element -->

      <select v-model="info.citizenship">
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>

      <label for="disabilities">Disabilites</label>
      <select v-model="info.disabilities">
        <option disabled value>Please select one</option>
        <option
          v-for="(disabilitie, index) in disabilities"
          :key="index"
          :value="disabilitie"
        >{{disabilitie}}</option>
      </select>
      <label for="heritage">Heritage</label>
      <select v-model="info.heritage">
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>
      <label for="religion">Religion</label>
      <select v-model="info.religion">
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>

      <label for="majors">Possible Majors</label>
      <select v-model="info.majors">
        <option disabled value>Please Select One</option>
        <option v-for="(major, index) in majors" :key="index" :value="major">{{major}}</option>
      </select>
      <label for="career">Career Objectives</label>
      <select v-model="info.career">
        <option disabled value>Please select one</option>

        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>
      <label for="honors">Academic Honors</label>
      <input type="text" id="honors" v-model="info.honors" />
      <br />
      <!-- should this be text or  a select element -->

      <!-- need to be a multiselect -->
      <label for="education">Educational Experiences</label>
      <select v-model="info.education">
        <option disabled value>Please Select One</option>
        <option
          v-for="(educationalExperience, index) in educationalExperiences"
          :key="index"
          :value="educationalExperience"
        >{{educationalExperience}}</option>
      </select>

      <button @click="setPersonalInfo" class="button">Save</button>
    </div>
    <div v-show="!show">
      <display-personal-info :show=" show" @editPersonalInfo="edit"></display-personal-info>
    </div>
  </div>
</template>

<script>
import DisplayPersonalInfo from "./editable/DisplayPersonalInfo.vue";
import * as data from "../../data";

export default {
  components: {
    displayPersonalInfo: DisplayPersonalInfo
  },
  data() {
    return {
      months: data.default.months,
      genders: data.default.genders,
      majors: data.default.majors,
      disabilities: data.default.disabilities,
      selectedMonth: "",
      selectedDay: "",
      selectedYear: "",
      educationalExperiences: data.default.educationalExperiences,
      info: {
        gender: "",
        birthday: "",
        citizenship: "",
        heritage: "",
        religion: "",
        majors: "",
        career: "",
        honors: "",
        education: "",
        disabilities: ""
      },
      show: true
    };
  },
  computed: {
    years() {
      console.log(data.default.majors);
      const year = new Date();
      return Array.from(
        { length: year.getFullYear() - 1959 },
        (_, index) => 1960 + index
      );
    }
  },
  methods: {
    setPersonalInfo() {
      // set data
      this.$store.commit("updatePersonalInfo", this.info);
      this.show = false;
    },
    edit(updated) {
      this.show = updated;
    }
  }
};
</script>

<style>
.birthday {
  width: 6rem !important;
  display: inline-block !important;
}
</style>
