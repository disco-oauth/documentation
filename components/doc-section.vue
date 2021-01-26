<template>
<v-card tile>
  <v-card-title v-html='title' />
  <v-card-text><slot /></v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'doc-section',
  props: ['title']
};
</script>

<style scoped>

</style>
