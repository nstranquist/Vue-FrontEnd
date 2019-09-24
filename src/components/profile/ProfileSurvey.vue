<template>
<div>
    <Education
     :displayBtn ="displayBtn"
    v-show="selectedComponent == 'Education'"
     @selectComponent="switchComponent" >
    </Education>
    <ParentInfo
     :displayBtn ="displayBtn"
    v-show="selectedComponent == 'ParentInfo'"
    @selectComponent="switchComponent" >
    </ParentInfo>
    <StudentActivities
     :displayBtn ="displayBtn"
    v-show="selectedComponent == 'StudentActivities'"
      @selectComponent="switchComponent" >
    </StudentActivities>
    <PersonalInfo
    v-show="selectedComponent == 'PersonalInfo'"
      :displayBtn ="displayBtn"
    @selectComponent="switchComponent" >
    </PersonalInfo>
     <DisplayProfileSurvey
    v-show="selectedComponent == 'DisplayProfileSurvey'"
    @selectComponent="switchComponent" @submit ="submitSurvey">
    </DisplayProfileSurvey>
</div>
</template>

<script>
export default {
  components: {
    Education: () => import('@/components/profile/Education'),
    ParentInfo: () => import('@/components/profile/ParentInfo'),
    PersonalInfo: () => import('@/components/profile/PersonalInfo'),
    StudentActivities: () => import('@/components/profile/StudentActivities'),
     DisplayProfileSurvey: () => import('@/components/profile/DisplayProfileSurvey')
  },
   data () {
    return {
    // default component
    selectedComponent: 'PersonalInfo',
    updatedSurveyComponent: '',
    isDisplayProfileComponent: false,
    displayBtn: true
    }
  },
 methods: {
    switchComponent (nextComponent) {
      console.log('nextComponent: ' + nextComponent)
      this.selectedComponent = nextComponent;

      if (this.selectedComponent == 'DisplayProfileSurvey'){
        console.log('display in profile survey before :' + this.displayBtn)
        this.displayBtn = false;
        console.log('display in profile survey  :' + this.displayBtn)
      }

    },
    submitSurvey(){
       console.log('survey submitted ')
         //submit data to backend
    },

  }
}
  </script>
