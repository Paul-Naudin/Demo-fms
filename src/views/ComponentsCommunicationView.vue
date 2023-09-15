<template>
  <h1>Communication entre les composants</h1>
  <div>
    <h3>Props</h3>
    <props-demo />
  </div>
  <div>
    <h3>Provide et inject</h3>
    <h4>Pas utilisé, vuex est mieux</h4>
  </div>
  <div>
    <h3>Emit events</h3>
    <emit-event />
  </div>
</template>

<script>
import PropsDemo from '../components/PropsDemo.vue';
import EmitEvent from '../components/EmitEvent.vue';

export default {
  name: 'ComponentsCommunicationView',
  components: {
    PropsDemo,
    EmitEvent
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