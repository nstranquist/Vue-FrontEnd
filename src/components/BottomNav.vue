  <template>
  <v-bottom-navigation
  app
    v-model="bottomNav"
    dark
    grow
  >
      <v-btn value="file">
      <span>File</span>
      <v-icon>mdi-file-document-box-check-outline</v-icon>
    </v-btn>

        <v-btn value="find">
      <span>Find</span>
      <v-icon>mdi-crosshairs</v-icon>
    </v-btn>

    <v-btn value="fund">
      <span>Fund</span>
      <v-icon>mdi-cash-multiple</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
      }
    },
  }
</script>
