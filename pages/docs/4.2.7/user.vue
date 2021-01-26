<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <doc-class v-bind='userClass'>
        <template v-slot:constructor>
          <code class='d-block'>This class is not exported, so the constructor is skipped here.</code>
        </template>
      </doc-class>
    </v-col>
  </v-row>
</template>

<script>
import userClass from '~/data/4.2.7/user';
export default {
  name: 'user',
  data: () => ({
    userClass
  }),
  head: {
    title: 'User',
    meta: [
      { property: 'og:title', content: 'User - Disco-OAuth' },
      { property: 'og:description', content: userClass.desc },
      { property: 'twitter:title', content: 'User - Disco-OAuth' },
      { property: 'twitter:description', content: userClass.desc },
    ]
  }
};
</script>
