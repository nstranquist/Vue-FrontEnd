<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" lg="10" xl="8">
        <h1 class="content-section-header">{{ templateItems[Number($route.params.id)] }}</h1>
        <v-card>
          <v-form>
            <v-container>
              <label class="template-label">First Paragraph</label>
              <v-textarea background-color="grey lighten-4" cols="30" rows="10"></v-textarea>
              <label class="template-label">Second Paragraph</label>
              <v-textarea background-color="grey lighten-4" cols="30" rows="10"></v-textarea>
              <label class="template-label">Third Paragraph</label>
              <v-textarea background-color="grey lighten-4" cols="30" rows="10"></v-textarea>
              <v-col cols="12" class="text-center">
                <v-btn>Check</v-btn>
                <v-btn color="success" class="form-save-btn">Save</v-btn>
              </v-col>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TemplateItem',
  data: () => ({
    templateItems: [
      'Blank Template',
      'Prose Fiction Template',
      'Persuasive Essay Template',
      'Research Paper Template',
      'Argumentative Template',
      'Personal Narrative Template',
      'Poetry Template'
    ],
    getTemplateName: function (route) {
      return this.data.templateItems[route]
    }
  })
}
</script>

<style scoped>
.template-label {
  font-size: 21px;
}
.form-save-btn {
  margin-left: 15px;
}
</style>
