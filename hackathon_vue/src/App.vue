<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <nav>
      <router-link class="btn btn-primary" to="/inscripcion">Inscribir Equipo</router-link>
    </nav>
    <nav>
      <router-link class="btn btn-danger" to="/hackathon">Listar hackathon?</router-link>
      
    </nav>
      <nav>
      <router-link class="btn btn-danger" to="/addhacka">Agregar Hackathon</router-link>
      
    </nav>
    
    <br/>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
