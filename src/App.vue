<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>


<template>
    <router-link to="/"><Button>Home</Button></router-link>
    <router-link to="/requesterdashboard"><Button>Req Dashboard</Button></router-link>
    <router-link to="/requesterticket"><Button>Req Ticket</Button></router-link>
    <router-link to="/responderdashboard"><Button>Res Dashboard</Button></router-link>
    <router-link to="/responderticket"><Button>Res Ticket</Button></router-link>
  <router-view/>
</template>

<script>
  export default{
    name: "App",

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
