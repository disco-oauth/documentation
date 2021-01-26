<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <doc-class v-bind='guildClass'>
        <template v-slot:constructor>
          <code class='d-block'>This class is not exported, so the constructor is skipped here.</code>
        </template>
      </doc-class>
    </v-col>
  </v-row>
</template>

<script>
import guildClass from '~/data/4.2.7/guild';
export default {
  name: 'guild',
  data: () => ({
    fn: '.env',
    guildClass
  }),
  head: {
    title: 'Guild'
  }
};
</script>
