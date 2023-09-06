<template>
  <div>
    <img alt="Beau gosse" src="../assets/bg.jpeg" />
    <h1>Démo Vue.js</h1>
    <router-link to="/databinding">Databinding</router-link>
    <router-link to="/events">Events</router-link>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

div {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  margin-bottom: 5%;
}
</style>
