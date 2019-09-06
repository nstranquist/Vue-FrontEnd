<template>
    <div class="display-account-info">
        <h1 class="title-heading">My Account</h1>
        <hr>
    First Name:<br>
    <p>{{firstname }}</p>
      Lastt Name:<br>
    <p>{{ lastname}}</p>
     Phone Numbr:<br>
    <p>{{phone}}</p>
    Address:<br>
    <p>{{address}}</p>
    Email:<br>
    <p>{{email}}</p>
    Member Since:<br>
   <p>Today's Date</p>
    <button @click="editAccountInfo" class="button">Edit</button>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['show'],
  data () {
    return {
    }
  },
  computed:
                  mapState({
                    firstname: state => state.accountInformation.accountInfo.firstname,
                    lastname: state => state.accountInformation.accountInfo.lastname,
                    verify: state => state.accountInformation.accountInfo.verify,
                    password: state => state.accountInformation.accountInfo.password,
                    email: state => state.accountInformation.accountInfo.email,
                    address: state => state.accountInformation.accountInfo.address,
                    phone: state => state.accountInformation.accountInfo.phone
                    // will need to add another state for signup date
                  }),

  methods: {
    editAccountInfo () {
      this.$emit('canEdit', !this.show)
    }
  }
}

</script>

<style>

</style>
