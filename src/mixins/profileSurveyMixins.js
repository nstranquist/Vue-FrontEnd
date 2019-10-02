export const profileSurveyMixins = {
  props: {
    displayBtn: Boolean
  },

  methods: {
    updateSurvey (updateComponent, setData) {
      // set data
      this.$store.commit(updateComponent, setData)

      if (!this.displayBtn) {
        this.returnToDisplayProfileSurvey()
      }
    },
    clickNext (componentName) {
      console.log('Next Component: ' + componentName)
      this.selectComponent(componentName)
    },
    clickPrevious (componentName) {
      console.log('Previous Component: ' + componentName)
      this.selectComponent(componentName)
    },
    selectComponent (componentName) {
      console.log('Selected Component: ' + componentName)
      this.$emit('selectComponent', componentName)
    },
    returnToDisplayProfileSurvey () {
      this.$emit('selectComponent', 'DisplayProfileSurvey')
    }
  }
}
