<template>
<div>
    <div class="form" v-show="show">
    <h1 class="title-heading">Personal Information</h1>
    <hr>
    <label for="birthday">Birthday</label>
        <input type="text" id="birthday" v-model ="info.birthday">
    <p>Gender</p>
    <input type="radio" id="female" value="female" name="genderSelection" v-model="info.gender">
    <label for="female" class="radio-label">Female</label>
    <input type="radio" id="male" v-model ="info.gender" value="male" name="genderSelection">
    <label for="male" class="radio-label">Male</label>

    <label for="citizensihip">Citizenship</label>
    <!-- should this be text or  a select element -->

    <select v-model="info.citizenship">
        <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>

        <label for="disabilities">Disabilites</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
    <select v-model="info.disabilities">
        <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="heritage">Heritage</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
    <select v-model="info.heritage">
         <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="religion">Religion</label>
        <select v-model="info.religion">
             <option disabled value="" >Please select one</option>
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->

        <label for="majors">Possible Majors</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
    <select v-model="info.majors">
         <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="career">Career Objectives</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
    <select v-model="info.career">
                <option disabled value="" >Please select one</option>

        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="honors">Academic Honors</label>
    <input type="text" id="honors" v-model ="info.honors"><br>
<!-- should this be text or  a select element -->

        <label for="education">Educational Experiences</label>
            <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
            <select v-model="info.education">
                <option disabled value="" >Please select one</option>
                <option value="one">example #1</option>
                <option value="two">example #2</option>
                <option value="three">example #3</option>
                <option value="four">example #4</option>
            </select>

    <button @click="setPersonalInfo" class="button">Save</button>
    </div>
    <div v-show="!show">
        <display-personal-info :show = " show" @editPersonalInfo ="edit"></display-personal-info>
         </div>
</div>
</template>

<script>
  import DisplayPersonalInfo from '../views/editable/DisplayPersonalInfo.vue'
    export default {
        components:{
            displayPersonalInfo: DisplayPersonalInfo
        },
        data() {
            return{
                info: {
                gender: '',
                birthday: '',
                citizenship: '',
                heritage: '',
                religion: '',
                majors: '',
                career: '',
                honors: '',
                education: '',
                disabilities: ''
                },
                show: true,
            }
        },
        computed: {

          },
            methods: {
            setPersonalInfo() {
                 // set data
                 this.$store.commit('updatePersonalInfo', this.info)
                this.show = false;
                },
                 edit(updated){
                    this.show = updated;
                }
        }
    }

</script>

<style>

</style>
