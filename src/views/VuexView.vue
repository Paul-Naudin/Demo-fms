<template>
  <div>
    <h3>VueX Demo</h3>
    <h4>Compteur : {{ counter }}</h4>
    <h4>Double du compteur: {{ doubleCounter }}</h4>
    <button @click="increment">Incrémenter</button>
    <button @click="incrementAsync">Incrémenter Après 2 secondes</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'VuexView',
  computed: {
    ...mapGetters({
      counter: 'count',
      doubleCounter: 'double'
    })
  },
  methods: {
    increment() {
      this.$store.commit('increment', { amount: 1 });
    },
    ...mapActions({
      incrementAsync: 'incrementTwoSec',
    })
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
</style>