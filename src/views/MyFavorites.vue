<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="12">
         <v-card color="yellow darken-3">
          <v-container class="completed-container">
            <h2  v-show="profile" class="content-section-header">Scholarships <v-icon color="white" >school</v-icon></h2>
            <v-card>
              </div>
             <v-list  dense class="application-list-container" >
                <v-list-item v-for="(item) in myFaveScholarshipList" :key="item.id"  @click="">
                  <v-list-item-title v-text="item.text" class="list-item" ></v-list-item-title>
                  </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12">
      </div>
         <v-card color="blue-grey darken-4">
        <v-container class="completed-container">
              <v-row>
                  <v-col col="12">
                    <h3 class="content-section-header">Off-Campus Housing <v-icon color="white" >home</v-icon></h3>
                </v-col>
            </v-row>
                <v-card>
                  <v-list-item
                   v-for="(item, i) in myFaveHousingList"
                  :key="item.id"
                  @click="">
                  <v-list-item-title v-text="item.text" class="list-item" ></v-list-item-title>
                  </v-list-item>
              </v-list>
            </v-card>
          </v-container>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
   name: 'My Favorites',
  data: () => ({
    selected: false,
  }),
  computed: {
    myFaveScholarshipList: function () {
      let array = this.$store.state.myFavorites.myFaveScholarships;

      // const firstFive = array.slice(0,5);
      return array;
    },
    myFaveHousingList: function () {
      let array = this.$store.state.myFavorites.myFaveHousing;

      // const firstFive = array.slice(0,5);
      return array;
    },


  },
  methods: {
  createProfile(){

    },
  },
  created(){
    setTimeout(() => {
            this.loading = false;
          }, 6000);
      },
}
</script>

<style scoped>
.completed-container {
  color: #fff;
}
.application-list-container .list-item {
  padding-left: 10px;
}
.application-list-container .list-icon {
  font-size: 20px;
}

.subtitle{
  font-weight: bold;
  margin-right: 15px;
}
.sub-subtitle{
  margin-top: 2px;
}


</style>
