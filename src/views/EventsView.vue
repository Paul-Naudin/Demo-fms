<template>
  <h1>Evénements et affichage conditionnel</h1>
  <div>
    <h3>watchers</h3>
    On s'en branle personne utilise
  </div>
  <div>
    <h3>v-on et v-once</h3>
    <button v-on:click="increaseCounter">+1</button><br />
    <p>Ce texte sera mis à jour, compteur: {{ counter }}</p>
    <p v-once>Ce texte ne sera pas mis à jour, compteur: {{ counter }}</p>
  </div>
  <div>
    <h3>v-if, v-else-if et v-else</h3>
    <p v-if="counter < 5">Vous êtes nuls !</p>
    <p v-else-if="counter < 20">Vous êtes médiocres !</p>
    <p v-else>Vous êtes un boss !</p>
  </div>
  <div>
    <h3>v-show</h3>
    <button v-on:click="visible = !visible">Ne cliquez pas, vous seriez chokbar de bz</button><br />
    <div v-show="visible">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFzN2ofIXoAASfP1%3Fformat%3Djpg%26name%3Dsmall&f=1&nofb=1&ipt=eb3e4e32a3ca8f672093f2c70549c450a8a3efc062f9ac178e7745085d32c4a8&ipo=images" />
    </div>
  </div>
  <div>
    <h3>v-for</h3>
    <input v-model="newName" v-on:keyup.enter="names.push(newName)" />
    <ul>
      <li v-for="name in names">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { capitalize } from 'vue';

export default {
  name: 'DatabindingView',
  data() {
    return {
      counter: 0,
      visible: false,
      newName: '',
      names: ['Paul']
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    }
  }
};

</script>

<style scoped>
h1,
h3 {
  text-align: center;
}

h4 {
  text-align: center;
  color: grey;
  font-style: italic;
}

.lowqimage {
  max-width: 500px;
}
</style>