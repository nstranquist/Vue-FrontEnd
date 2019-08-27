<template>
    <div class="form">
    <h1 class="title-heading"> Sign Up</h1>
    <hr>
    <label for="firstname" >First Name</label>
    <input type="text" id="firstname" v-model="firstname">
    <label for="lastnmae">Last Name</label>
    <input type="text" id="lastnmae" v-model="lastnmae">
        <label for="address">Address</label>
    <input type="text" id="address" v-model="address">
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
        <label for="verify">Verify Password</label>
    <input type="password" id="verify" v-model="verify">
      <label for="verify">Verify Password</label>
        <button @click="setUserCredentials" class="button">sign up</button>

    </div>
</template>

<script>
    export default {
        data() {
            return{
                firstname:'',
                lastnmae:'',
                verify:'',
                password:'',
                email:'',
                address:''
                                }
        },
        methods:{
             setUserCredentials(){
                                  // set data
                console.log('firstname: ' + this.firstname);
                console.log('lastnmae: ' + this.lastnmae);
                console.log('verify: ' + this.verify);
                console.log('password: ' + this.password);
                console.log('email: ' + this.email);
                console.log('address: ' + this.address);
            }

        }
    }
</script>

<style>

</style>
