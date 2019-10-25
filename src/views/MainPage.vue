<template>
 <v-container fluid class="pa-8"   >
   <v-row>
   <v-row  no-gutters class="mb-2 mt-2 pa-2">
     <v-col
       v-for="cardHeading in cardHeading"
       :key="cardHeading.heading"
       cols="12"
       class="xs-12 sm-12 "
       >
        <v-card flat tile class="pa-2">
          <h3 :class="`${cardHeading.alignment}`">{{cardHeading.heading}}</h3>
        </v-card>
     </v-col>
   </v-row>
   <v-row no-gutters  class="mt-7 pa-10">
     <v-col
       v-for="card in cards"
       :key="card.description"
       :cols="`${card.flex}`"
        fill-height
       >
        <v-card flat  outlined tile class="pa-2">
          <p class="text-center">{{card.description + card.value}}</p>
        </v-card>
     </v-col>
   </v-row>
   </v-row>
 </v-container>
</template>

<script>
  export default{
    data(){
      return{
         cards: [
           {description: 'FASFA Completed: ', value: '0%', flex: 12},
           { description: 'Scholarships You Have Viewed:', value: ' 10', flex: 6},
           { description: 'Total Scholarships For You:', value: ' 125' ,  flex:6},
           { description: 'Available Housing Near You:', value: ' 200 units' , flex: 12}
      ],
      cardHeading:[
         {heading: 'Less Debt', alignment:'text-start'},
           { heading: 'More Learning', alignment: 'text-center'},
           { heading: 'Better Credit', alignment: 'text-end'},
      ]
      }
    }
  }
</script>
