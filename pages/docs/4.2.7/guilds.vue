<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <doc-class v-bind='guildsClass'>
        <template v-slot:constructor>
          <code class='d-block'>This class is not exported, so the constructor is skipped here.</code>
          <v-alert class='mt-6' type='info' colored-border border='left'>
            <strong>NOTE :</strong> The following methods are not present in {{ guildsClass.name }} to make it immutabe.
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
import guildsClass from '~/data/4.2.7/guilds';
export default {
  name: 'guilds',
  data: () => ({
    guildsClass
  }),
  head: {
    title: 'Guilds',
    meta: [
      { property: 'og:title', content: 'Guilds - Disco-OAuth' },
      { property: 'og:description', content: guildsClass.desc },
      { property: 'twitter:title', content: 'Guilds - Disco-OAuth' },
      { property: 'twitter:description', content: guildsClass.desc },
    ]
  }
};
</script>
