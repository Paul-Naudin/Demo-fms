<template>
  {{ message }}
</template>

<script>
export default {
  name: 'PropsDemoChild',
  props: {
    message: {
      type: String,
      required: false,
    }
  }
}
</script>
