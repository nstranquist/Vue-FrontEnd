<template>
  <div>
    <div class="form" v-show="show">
      <h1 class="title-heading">Parent Information</h1>
      <hr />
      <label for="memberships">Parent Associations and Memberships</label>
      <input type="text" id="memberships" v-model="info.memberships" />

      <label for="employer">Current/Previous Employers</label>
      <input type="text" id="employer" v-model="info.employer" />

      <label for="military">Parent Military Experience</label>
      <select id="military" v-model="info.military">
        <option disabled value>Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
      </select>

      <label for="occupation">Parent Occupation</label>
      <input type="text" id="occupation" v-model="info.occupation" />

      <button @click="setParentInfo" class="button">Save</button>
    </div>
    <div v-show="!show">
      <display-parent-info :show="show" @editParentInfo="edit"></display-parent-info>
    </div>
  </div>
</template>

<script>
import DisplayParentInfo from "../views/editable/DisplayParentInfo.vue";
export default {
  components: {
    displayParentInfo: DisplayParentInfo
  },
  data() {
    return {
      info: {
        memberships: "",
        employer: "",
        occupation: "",
        military: ""
      },
      show: true
    };
  },
  methods: {
    setParentInfo() {
      // set data
      this.show = false;
      this.$store.commit("updateParentInfo", this.info);
    },
    edit(updated) {
      this.show = updated;
    }
  }
};
</script>

<style>
</style>
