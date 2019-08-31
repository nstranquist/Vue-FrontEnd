<template>
    <div class="form">
    <h1 class="title-heading"> Sign in</h1>
    <hr>
    <label for="email" >Email</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
        <button @click="login" class="button">sign in</button>

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
                 // validate user exists
            }
        }
    }
</script>

<style>

</style>
