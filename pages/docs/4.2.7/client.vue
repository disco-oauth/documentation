<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <social-view :title='clientClass.title + " - Disco-OAuth"' :description='clientClass.desc' />
      <doc-class v-bind='clientClass'>
        <template v-slot:constructor>
          <code class='d-block'>
            const client = new OAuthClient('159985870458322944', 'et3MK****************x48cqYLEQ');
          </code>
          <p class='my-4'>Usually, the client secret should be kept hidden using environment variables. Your code should normally look something like this:</p>
          <v-tabs v-model='fn'><v-tab class='text-lowercase'>.env</v-tab><v-tab class='text-lowercase'>index.js</v-tab></v-tabs>
          <v-tabs-items v-model='fn'>
            <v-tab-item>
              <v-card flat>
                <v-card-subtitle class='d-block'><code class='d-block'>clientSecret="et3MK****************x48cqYLEQ"</code></v-card-subtitle>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-subtitle class='d-block'><code class='d-block'>const client = new OAuthClient('159985870458322944', process.env.clientSecret);</code></v-card-subtitle>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </template>
      </doc-class>
    </v-col>
  </v-row>
</template>

<script>
import clientClass from '~/data/4.2.7/client';
export default {
  name: 'client',
  data: () => ({
    fn: '.env',
    clientClass
  }),
  head: {
    title: 'Client'
  }
};
</script>
