<template>
  <div>
    <div class="form" v-show="show">
      <h1 class="title-heading">Education</h1>
      <hr />
      <label for="graduationDate">High School Graduation</label>

      <select v-model="education.graduationDate">
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>

      <label for="math">SAT Math Score:</label>
      <input type="text" id="math" v-model="education.math" />

      <label for="ebrw">SAT ( EBRW )</label>
      <input type="text" name="ebrw" v-model="education.ebrw" />

      <label for="written">SAT Written Score</label>
      <input type="text" id="written" v-model="education.written" />

      <label for="act">ACT Score</label>
      <input type="text" id="act" v-model="education.act" />

      <p>Currently Enrolled</p>
      <input type="radio" id="yes" value="yes" v-model="education.enrolled" name="enrolled" checked />
      <label for="yes" class="radio-label">Yes</label>
      <input type="radio" id="no" value="no" v-model="education.enrolled" name="enrolled" />
      <label for="no" class="radio-label">No</label>

      <p>Transfer Within A Year</p>
      <input type="radio" id="yes" value="yes" name="transfer" v-model="education.transfer" checked />
      <label for="yes" class="radio-label">Yes</label>
      <input type="radio" id="no" value="no" v-model="education.transfer" name="transfer" />
      <label for="no" class="radio-label">No</label>

      <label for="college">College Graduation Year</label>
      <select v-model="education.college">
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>
      <button @click="setEducation" class="button">Save</button>
    </div>
    <div v-show="!show">
      <display-education :show="show" @editEducation="edit"></display-education>
    </div>
  </div>
</template>

<script>
import DisplayEducation from "./editable/DisplayEducation.vue";

export default {
  components: {
    displayEducation: DisplayEducation
  },
  data() {
    return {
      education: {
        graduationDate: "",
        math: "",
        ebrw: "",
        written: "",
        act: "",
        enrolled: "",
        transfer: "",
        college: ""
      },
      show: true
    };
  },
  computed: {},
  methods: {
    setEducation() {
      // set data
      this.show = false;
      this.$store.commit("updateEducation", this.education);
    },
    edit(updated) {
      this.show = updated;
    }
  }
};
</script>

<style>
</style>
