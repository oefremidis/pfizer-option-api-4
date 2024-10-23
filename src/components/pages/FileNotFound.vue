<template>
  <div>
    <h1>404</h1>
    <p>File not Found</p>

    <button @click="goToHome">Go to Home Page</button>
  </div>
</template>


<script>
  export default {
    methods: {
      goToHome(){
        this.$router.push('/home')
      }
    }
  }

</script>