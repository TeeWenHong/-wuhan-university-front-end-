<template>
  <div class="test">
    {{ loggedInUser }}
  </div>
</template>

<script>
export default {
    name:'UserComponents',
    data(){
        return{
            userName:'用户100000001',
            loggedInUser:null,
        }   
    }
}
</script>

<style>

</style>