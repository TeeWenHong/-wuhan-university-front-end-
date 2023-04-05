<template>
  <div class="test">
    {{ $store.state.loginForm.username }}
  </div>
</template>

<script>
export default {
    name:'UserComponents',
    data(){
        return{
            username:'',
            
        }   
    }
}
</script>

<style>

</style>