<template>
  <string v-if='name === "string"' />
  <number v-else-if='name === "number"' />
  <boolean v-else-if='name === "boolean"' />
  <object-type v-else-if='name === "object-type"' />
  <date v-else-if='name === "date"' />
  <error v-else-if='name === "error"' />
  <map-type v-else-if='name === "map-type"' />
  <internal v-else-if='name === "internal"' :name='internal' :ver='version' />
  <array v-else-if='name === "array"'><string v-if='array === "string"' /><number v-if='array === "number"' /><boolean v-if='array === "boolean"' /><object-type v-if='array === "object-type"' /><internal v-if='array === "internal"' :name='internal' :ver='version' /><date v-if='array === "date"' /><map-type v-else-if='array === "map-type"' /><error v-else-if='array === "error"' /></array>
  <promise v-else-if='name === "promise"'><string v-if='promise === "string"' /><number v-if='promise === "number"' /><boolean v-if='promise === "boolean"' /><object-type v-if='promise === "object-type"' /><internal v-if='promise === "internal"' :name='internal' :ver='version' /><date v-if='promise === "date"' /><map-type v-else-if='promise === "map-type"' /><error v-else-if='promise === "error"' /><array v-if='promise === "array"'><string v-if='array === "string"' /><number v-if='array === "number"' /><boolean v-if='array === "boolean"' /><object-type v-if='array === "object-type"' /><internal v-if='name === "internal"' :name='internal' :ver='version' /><date v-if='array === "date"' /><map-type v-else-if='array === "map-type"' /><error v-else-if='array === "error"' /></array></promise>
</template>

<script>
export default {
  name: 'type',
  props: ['name', 'array', 'promise', 'internal', 'version']
};
</script>
