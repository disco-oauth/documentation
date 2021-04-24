<template>
  <div :class="`label ${type}`">
    {{ type }}
  </div>
</template>

<script>
export default {
  name: "do-label",
  props: ['type']
}
</script>

<style scoped>
.label {
  display: inline-block;
  font-weight: normal;
  font-size: 0.8em;
  padding: 0.2rem 1rem;
  margin: 0.15rem 1rem;
  text-transform: uppercase;
}

.async {
  background-color: #3464cc;
}

.chainable {
  background-color: #228b22;
}
</style>
