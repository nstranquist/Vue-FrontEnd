<template>
  <v-container class="page-scholarships" fill-height fluid grid-list-xl>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="content-section-header">Scholarships</h1>
        <v-card to="/scholarships/3">
          <v-data-table :headers="headers" :items="items" click:row="toggleRoute(:item)" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as data from '../data'
export default {
  name: 'scholarships',
  scholarships: '',
  async created(){
    await this.loadScholarships();
  },
  methods: {
    toggleRoute () {
      this.$router.push('/scholarships/4');
    },
    async loadScholarships(){
      this.scholarships = await data.default.getScholarships();
    }
  },
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Organization',
        value: 'organization'
      },
      {
        sortable: false,
        text: 'Amount',
        value: 'amount'
      },
      {
        sortable: false,
        text: 'Type',
        value: 'type'
      },
      {
        sortable: false,
        text: 'Due Date',
        value: 'date'
      }
    ],
    items: [
      {
        name: 'First Scholarship',
        organization: 'Balsa Foundation',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Second Scholarship',
        organization: 'Washington University',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Third Scholarship',
        organization: 'Tech Artista',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Fourth Scholarship',
        organization: 'Venture Cafe',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Fifth Scholarship',
        organization: 'McDonalds',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Sixth Scholarship',
        organization: 'Jimmy Johns',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Seventh Scholarship',
        organization: 'Saint Louis University',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Eight Scholarship',
        organization: 'University of Missouri - St. Louis',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Ninth Scholarship',
        organization: 'Rotary Club',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Tenth Scholarship',
        organization: 'Rotary Club',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'First Scholarship',
        organization: 'Rotary Club',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      },
      {
        name: 'Second Scholarship',
        organization: 'Rotary Club',
        amount: '2,000',
        type: 'Essay',
        date: 'Sep. 8'
      }
    ]
  })
}
</script>

<style scoped>
</style>
