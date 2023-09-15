<template>
  <div>
    <emit-event-child v-on:click-event="alerte">
      <h1>COUILLE</h1>
    </emit-event-child>
  </div>
</template>

<script>
import EmitEventChild from './EmitEventChild.vue'

export default {
  name: 'EmitEvent',
  components: {
    EmitEventChild
  },
  data() {
    return {
      message: 'Message par défaut de la vue parente'
    }
  },
  methods: {
    alerte(msg) {
      alert(msg);
    }
  }
}
</script>
