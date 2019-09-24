<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab >
        <v-icon left>view_list</v-icon>View
      </v-tab>
      <v-tab>
        <v-icon left>border_color</v-icon>Edit
      </v-tab>
      <v-tab>
        <v-icon left>calendar-text</v-icon>Survey
      </v-tab>

      <v-tab-item>
        <h1 class="content-section-header">View Profile</h1>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <p>First Name: {{firstname}}</p>
              <p>Last Name:{{lastname}}</p>
              <p>High School:{{highSchool}}</p>
              <p>Graduation Date:{{highSchoolGraduationDate}}</p>
              <p>GPA:{{gpa}}</p>
              <p>ACT:{{act}}</p>
              <p>Race:</p>
              <p>Ethnicity:</p>
              <p>Religion:{{religion}}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <h1 class="content-section-header">Edit Profile</h1>
        <v-container>
          <v-card>
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="accountInfo.firstname" label="First Name" />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="accountInfo.lastname" label="Last Name" />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field label="Email" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="accountInfo.address" label="Address" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="accountInfo.city" label="City" class="purple-input" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="accountInfo.zipCode" label="Zip Code" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="education.highSchool" label="High School" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field label="Graduation Date" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field label="GPA" />
                  </v-col>
                  <v-col cols="12" md="3">
                    <v-text-field v-model="education.act"  label="ACT" />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field label="Race" />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field label="Ethnicity" />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field label="Religion" />
                  </v-col>
                  <v-col cols="12" class="text-center">
                    <v-btn class="form-update-btn" @click="updateProfile">Update</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <h1 class="content-section-header">Profile Survey</h1>
        <v-container> <ProfileSurvey></ProfileSurvey></v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<!--<template>
  <v-container class="page-profile" fill-height fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="content-section-header">Edit Profile</h1>
        <v-card>
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field label="First Name" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="Last Name" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="Email" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field label="Address" />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="City" class="purple-input" />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="Zip Code" />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="High School" />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="Graduation Date" />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="GPA" />
                </v-col>
                <v-col cols="12" md="3">
                  <v-text-field label="ACT" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="Race" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="Ethnicity" />
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field label="Religion" />
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn class="form-update-btn">Update</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>-->

<script>
import { mapState } from 'vuex'
export default {
  components: {
    ProfileSurvey: () => import('@/components/profile/ProfileSurvey')
  },
  data() {
    return {
       accountInfo: {
         firstname: '',
          lastname: '',
          password: '',
          email: '',
          address: '',
          phone: '',
          city: '',
          zipcode: ''
      },
      education: {
        highSchoolGraduationDate: '',
         act: '',
      highSchool: '',
      gpa:''
      }
      }
    },
     computed:
        mapState({
          firstname: state => state.accountInformation.accountInfo.firstname,
          lastname: state => state.accountInformation.accountInfo.lastname,
          highSchool: state => state.profile.education.highSchool,
          act: state => state.profile.education.act,
          gpa: state => state.profile.education.gpa,
          highSchoolGraduationDate: state => state.profile.education.highSchoolGraduationDate,
          religion: state => state.profile.personalInfo.religion
        }),
        methods: {
       updateProfile() {
      // set data
      this.$store.commit("updateAccountInfo", this.accountInfo);
        this.$store.commit("updateEducation", this.education);

      console.log(this.$store.getters.getAccountInfo.firstname);
    }
  }
  }

</script>

<style scoped>
h1.text-center {
  margin-bottom: 15px;
}
.py-0 {
  border: 1px solid #6200ea;
}
.py-0 .form-update-btn {
  color: white;
  background: #5097dd !important;
}
</style>
