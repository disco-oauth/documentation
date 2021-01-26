<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <social-view :title='connectionsClass.title + " - Disco-OAuth"' :description='connectionsClass.desc' />
      <doc-class v-bind='connectionsClass'>
        <template v-slot:constructor>
          <code class='d-block'>This class is not exported, so the constructor is skipped here.</code>
          <v-alert class='mt-6' type='info' colored-border border='left'>
            <strong>NOTE :</strong> The following methods are not present in {{ connectionsClass.name }} to make it immutabe.
            <ul>
              <li>set(key, value)</li>
              <li>delete(key)</li>
              <li>clear()</li>
            </ul>
          </v-alert>
        </template>
      </doc-class>
    </v-col>
  </v-row>
</template>

<script>
import connectionsClass from '~/data/4.2.7/connections';
export default {
  name: 'connections',
  data: () => ({
    connectionsClass
  }),
  head: {
    title: 'Connections'
  }
};
</script>
