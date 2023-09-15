<template>
  <button @click="notifyParent">Click here</button>
  <slot></slot>
</template>

<script>
export default {
  name: 'EmitEventChild',
  methods: {
    notifyParent() {
      this.$emit('click-event', 'ALERTE !');
    }
  }
}
</script>