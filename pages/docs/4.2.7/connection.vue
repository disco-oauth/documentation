<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <social-view :title='connClass.title + " - Disco-OAuth"' :description='connClass.desc' />
      <doc-class v-bind='connClass'>
        <template v-slot:constructor>
          <code class='d-block'>This class is not exported, so the constructor is skipped here.</code>
        </template>
      </doc-class>
    </v-col>
  </v-row>
</template>

<script>
import connClass from '~/data/4.2.7/connection';
export default {
  name: 'user',
  data: () => ({
    connClass
  }),
  head: {
    title: 'Connection'
  }
};
</script>
