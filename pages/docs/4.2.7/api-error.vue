<template>
  <v-row class='mt-4' align='center' justify='center'>
    <v-col cols='12' md='8'>
      <social-view :title='errorClass.title + " - Disco-OAuth"' :description='errorClass.desc' />
      <doc-class v-bind='errorClass'>
        <template v-slot:constructor>
          <code class='d-block'>This class is not exported, so the constructor is skipped here.</code>
          <p class='mt-6'>Some commonly encountered status codes are listed below.</p>
          <v-simple-table>
            <template v-slot:default>
              <thead><tr><th>Status Code</th><th>Possible issue</th></tr></thead>
              <tbody>
              <tr v-for='apiError in apiErrors' :key='apiError.code'><td v-text='apiError.code' /> <td v-text='apiError.issue' /></tr>
              </tbody>
            </template>
          </v-simple-table>
          <p class='my-4'>There can be other status codes too that are very rare. If it is of the form <code>5XX</code> then it is a server error and your code is perfectly fine.</p>
        </template>
      </doc-class>
    </v-col>
  </v-row>
</template>

<script>
import errorClass from '~/data/4.2.7/api-error';
export default {
  name: 'api-error',
  data: () => ({
    errorClass,
    apiErrors: [
      { code: 400, issue: 'BAD REQUSET. (Something was wrong with the request being made)' },
      { code: 401, issue: 'UNAUTHORIZED. (The access token has expired)' },
      { code: 403, issue: 'FORBIDDEN. (The access token does not have access to this resource)' },
      { code: 404, issue: 'NOT FOUND. (Request made to an invalid endpoint or with invalid payload data)' },
      { code: 405, issue: 'METHOD NOT ALLOWED. (Wrong HTTP method used for the request)' },
      { code: 429, issue: 'TOO MANY REQUESTS. (You are being rate limited)' },
      { code: 502, issue: 'GATEWAY UNAVAILABLE. (The discord servers are busy, try again after some time)' },
    ]
  }),
  head: {
    title: 'API Error'
  }
};
</script>
