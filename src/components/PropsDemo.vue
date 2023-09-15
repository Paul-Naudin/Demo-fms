<template>
  <props-demo-child v-bind:message="texte" /><br />
  <input type="text" v-model="texte" />
</template>

<script>
import PropsDemoChild from './PropsDemoChild.vue'

export default {
  name: 'PropsDemo',
  data() {
    return {
      texte: 'Message par défaut de la vue parente'
    }
  },
  components: {
    PropsDemoChild
  }
}
</script>
