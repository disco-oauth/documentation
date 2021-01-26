<template>
  <nuxt-link exact :to='"/docs/" + ver + name' v-text='name[0].toUpperCase() + name.substr(1).toLowerCase()' />
</template>

<script>
export default {
  name: 'internal',
  props: ['name', 'ver']
};
</script>
