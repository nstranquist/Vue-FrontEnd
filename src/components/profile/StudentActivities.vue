<template>
  <div>
    <div class="form" v-show="show">
      <h1 class="title-heading">Student Activities</h1>
      <hr />
      <label for="fraternity">Fraternity</label>
      <input type="text" id="fraternity" v-model="activities.fraternity" />
      <br />
      <label for="military">Military Experience</label>
      <!-- should this be text or select -->
      <select v-model="activities.military">
        <option disabled value>Please select one</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>
      <label for="sorority">Sorority</label>
      <input type="text" id="sorority" v-model="activities.sorority" />
      <label for="sports">Sports</label>

      <select v-model="activities.sports">
        <!-- should this be text or select -->
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>
      <label for="perform">Performing Arts</label>
      <input type="text" id="perform" v-model="activities.perform" />
      <label for="employer">Current/Previous Employer</label>
      <input type="text" id="employer" v-model="activities.employer" />
      <button @click="submitStudentActivities" class="button">Save</button>
    </div>

    <div v-show="!show">
      <display-student-activities :show="show" @editActivities="edit"></display-student-activities>
    </div>
  </div>
</template>

<script>
import DisplayStudentActivities from "./editable/DisplayStudentActivities.vue";
export default {
  components: {
    displayStudentActivities: DisplayStudentActivities
  },
  data() {
    return {
      activities: {
        fraternity: "",
        military: "",
        sorority: "",
        sports: "",
        perform: "",
        employer: ""
      },
      show: true
    };
  },
  methods: {
    submitStudentActivities() {
      // set data
      this.show = false;
      this.$store.commit("updateStudentActivities", this.activities);
    },
    edit(updated) {
      this.show = updated;
    }
  }
};
</script>

<style>
</style>
