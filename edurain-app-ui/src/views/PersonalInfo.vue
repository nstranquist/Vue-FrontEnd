<template>
    <div class="form">
    <h1 class="title-heading">Personal Information</h1>
    <hr>
    <label for="birthday">Birthday</label>
        <input type="text" id="birthday" v-model ="birthday">
    <p>Gender</p>
    <input type="radio" id="female" value="female" name="gender" v-model="picked">
    <label for="female" class="radio-label">Female</label>
    <input type="radio" id="male" v-model ="picked" value="male" name="gender">
    <label for="male" class="radio-label">Male</label>

    <label for="citizensihip">Citizenship</label>
    <!-- should this be text or  a select element -->

    <select v-model="citizensihip">
        <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>

        <label for="disabilities">Disabilites</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
    <select v-model="citizensihip">
        <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="heritage">Heritage</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
    <select v-model="heritage">
         <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="religion">Religion</label>
        <select v-model="religion">
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
    <select v-model="majors">
         <option disabled value="" >Please select one</option>
        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="career">Career Objectives</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
    <select v-model="career">
                <option disabled value="" >Please select one</option>

        <option value="one">example #1</option>
        <option value="two">example #2</option>
        <option value="three">example #3</option>
        <option value="four">example #4</option>
    </select>
        <label for="honors">Academic Honors</label>
    <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->

        <label for="education">Educational Experiences</label>
            <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
<!-- should this be text or  a select element -->
            <select v-model="education">
                <option disabled value="" >Please select one</option>
                <option value="one">example #1</option>
                <option value="two">example #2</option>
                <option value="three">example #3</option>
                <option value="four">example #4</option>
            </select>


    <button @click="setPersonalInfo" class="button">Submit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                picked: '',
                birthday: '',
                citizensihip: '',
                heritage: '',
                religion: '',
                majors: '',
                career: '',
                honors: '',
                education: ''

            }
        },
        computed: {
          selectedComponent(){
            return this.$store.getters.selectComponent;
          }
          },
            methods: {
            setPersonalInfo() {
                 // set data

                console.log('picked: ' + this.picked);
                console.log('birthday: ' + this.birthday)
                console.log('citizensihip: '+ this.citizensihip)
                console.log('heritage: '+ this.heritage)
                console.log('religion: '+ this.religion)
                console.log('majors: '+ this.majors)
                console.log('career: '+ this.career)
                console.log('honors: '+ this.honors)
                console.log('education: '+ this.education)
                this.selectEducation();
                },
                  selectEducation(){
                      return this.$store.commit('switchComponent', 'education');
          },
        }
    }

</script>

<style>

</style>
