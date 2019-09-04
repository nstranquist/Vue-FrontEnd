<template>
<div>
    <div class="form" v-show="show">
    <h1 class="title-heading"> Sign Up</h1>
    <hr>
    <label for="firstname" >First Name</label>
    <input type="text" id="firstname" v-model="accountInfo.firstname">
    <label for="lastnmae">Last Name</label>
    <input type="text" id="lastnmae" v-model="accountInfo.lastnmae">
        <label for="address">Address</label>
    <input type="text" id="address" v-model="accountInfo.address">
       <label for="phone">Phone Number</label>
    <input type="text" id="phone" v-model="accountInfo.phone">
    <label for="email">Email</label>
    <input type="text" id="email" v-model="accountInfo.email">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="accountInfo.password">
        <label for="verify">Confirm Password</label>
    <input type="password" id="verify" v-model="accountInfo.verify">
              <button @click="setUserCredentials" class="button">sign up</button>
    </div>
    <div v-show="!show">
 <account-info :show = "show" @canEdit="edit"></account-info>
     </div>
      </div>
</template>

<script>
    import AccountInfo from '../views/editable/AccountInfo.vue'
    export default {
         components:{
            accountInfo: AccountInfo
        },
        data() {
            return{
                accountInfo:{
                 firstname:'',
                lastnmae:'',
                verify:'',
                password:'',
                email:'',
                address:'',
                phone:''
                },
                show: true
             }
        },
        methods:{
             setUserCredentials(){
                    // set data
                    this.$store.commit('updateAccountInfo', this.accountInfo);
                    this.show = false;
                    console.log('setUserCredentials: ' + this.show)
            },
                edit(updated){
                    this.show = updated;
                }
        }
    }
</script>

<style>

</style>
