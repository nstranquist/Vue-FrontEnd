<template>
    <div class="form">
        <h1 class= "title-heading">Student Activities</h1>
        <hr>
        <label for="fraternity">Fraternity</label>
        <input type="text" id="fraternity" value=""><br>
        <label for="military">Military Experience</label>
        <!-- should this be text or select -->
        <select id="military">
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="sorority">Sorority</label>
        <input type="text" id="sorority"><br>
        <label for="sports">Sports</label>
        <!-- <input type="text" name="name" placeholder="Please enter first and last name"><br> -->
        <select id="sports">
        <!-- should this be text or select -->
            <option value="one">example #1</option>
            <option value="two">example #2</option>
            <option value="three">example #3</option>
            <option value="four">example #4</option>
        </select>
        <label for="perform">Performing Arts</label>
        <input type="text" id="perform" ><br>
        <label for="employer">Current/Previous Employer</label>
        <input type="text" id="employer"><br>
    <button type="submit" class="button">Submit</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
            }
        }
    }
</script>

<style>

</style>
