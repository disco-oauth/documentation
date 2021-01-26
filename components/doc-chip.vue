<template>
  <v-chip small label :color='colors[type]' class='text-uppercase'>{{ type }}</v-chip>
</template>

<script>
export default {
  name: 'doc-chip',
  props: ['type'],
  data: () => ({
    colors: {
      'read-only': 'primary',
      'async': 'success'
    }
  })
};
</script>

<style scoped>

</style>
