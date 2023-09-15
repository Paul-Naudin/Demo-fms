<template>
  <h1>{{ sectionTitle }}</h1>
  <h4 v-once>{{ getRandomSentence() }}</h4>
  <div v-once>
    <h3>v-bind:</h3>
    <img v-bind:class="imgClass" v-bind:src="getImgSrc()" />
  </div>
  <div v-html="htmlContent"></div>
  <div>
    <h3>Computed properties:</h3>
    <button v-on:click="increaseCounter(0)">Compteur 1 ++</button><br />
    <button v-on:click="increaseCounter(1)">Compteur 2 ++</button><br />
    Compteur 1: {{ counter[0] }}<br />
    Compteur 2: {{ counter[1] }}<br />
    Compteur Total: {{ counterFinal }}
  </div>
  <div>
    <h3>v-model:</h3>
    <input v-model="sectionTitle" />
  </div>
</template>

<script>
import { capitalize } from 'vue';

export default {
  name: 'DatabindingView',
  data() {
    return {
      imgClass: 'lowqimage',
      sectionTitle: 'Databinding',
      htmlContent: '<h3>v-html ! </h3>',
      counter: [0, 0],
    };
  },
  computed: {
    counterFinal() {
      return this.counter[0] + this.counter[1];
    }
  },
  methods: {
    getRandomSentence() {
      const sentences = [
        "Je suis un beau gosse",
        "1 + 1 = 2",
        "<We are Coders ! />",
        "Segmentation fault, core dumped"
      ]

      return sentences[Math.floor(Math.random() * sentences.length)];
    },
    getImgSrc() {
      const sources = [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9c%2F01%2F27%2F9c0127608c235b983e12af90d38941f1.jpg&f=1&nofb=1&ipt=f7c21f160d1484260bd7e8f7ecff0ca28507c98d5aac4a873286baeff2ae5143&ipo=images",
        "https://cdn.savoir.fr/wp-content/uploads/sites/5/2011/11/Fais-moi-signe.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.paumesdeveil.com%2Fwp-content%2Fuploads%2F2020%2F08%2Flogo-bebe-fais-moi-signe-1024x969.png&f=1&nofb=1&ipt=99289d8eadb859ca20b1951f9c355b56fbeec5646120dedaca13abbc4adbdf97&ipo=images"
      ]
      return sources[Math.floor(Math.random() * sources.length)];
    },
    increaseCounter(counterIndex) {
      this.counter[counterIndex]++;
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