<template>
    <div class="display-account-info">
        <h1 class="title-heading">Education</h1>
        <hr>
    High School Graduation Date:<br>
    <p>{{graduationDate}}e</p>
     SAT Math Score:<br>
    <p>{{math}}</p>
    SAT (EBRW):<br>
    <p>{{ebrw}}</p>
    SAT Written Score:<br>
    <p>{{written}}</p>
   ACT Score:<br>
<p>{{act}}</p>
    Currently Enrolled:<br>
   <p>{{enrolled}}</p>
   Transfer Within A Year:<br>
   <p>{{transfer}}</p>
    College Graduation Year:<br>
   <p>{{college}}</p>
   <!-- //May need to use props and v-bind to toggle the appearance of this button -->
    <!-- <button type="submit" class="button">Edit</button> -->
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return{
            }
        },
        computed:
        mapState({

                graduationDate: state => state.profile.education.graduationDate,
                math: state => state.profile.education.math,
                ebrw:  state => state.profile.education.ebrw,
                written: state => state.profile.education.written,
                act: state => state.profile.education.act,
                enrolled: state => state.profile.education.enrolled,
                transfer: state => state.profile.education.transfer,
                college: state => state.profile.education.college,
        })
    }
</script>

<style>

</style>
