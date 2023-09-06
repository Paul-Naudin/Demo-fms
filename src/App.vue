<template>
  <div>
    <router-link to="/home">Home</router-link>
  </div>
  <RouterView />
</template>

<style>
html,
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #636ced;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}
</style>

<style scoped>
div {
  padding: 10% 10%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
}
</style>
