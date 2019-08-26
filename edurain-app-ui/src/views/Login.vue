<template>
    <div class="form">
    <h1 class="title-heading"> Login</h1>
    <hr>
    <label for="email" >Email</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
        <button @click="login" class="button">Login</button>

    </div>
</template>

<script>
    export default {
        data() {
            return{
                    email: '',
                    password: ''
            }
        },
        methods:{
            login() {
                // should submit to server
                console.log('email: ' + this.email);
                console.log('password: ' + this.password);
            }
        }
    }
</script>

<style>

</style>
