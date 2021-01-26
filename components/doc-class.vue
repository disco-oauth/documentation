<template>
<div>
  <v-card tile>
    <v-card-title>{{ title }}&#8194;<div class='grey--text' v-if='typeof classExtends !== "undefined"'>extends <type :name='classExtends.type' :promise='classExtends.promised' :array='classExtends.arrayOf' :internal='classExtends.internal' :version='classExtends.version' /></div></v-card-title>
    <v-card-subtitle v-html='desc' />
    <v-card-text>
      <p class='mb-0'>The {{ name }} takes in {{ params.length }} paramter{{ params.length > 1 ? 's' : '' }} in its constructor.</p>
      <ul>
        <li v-for='param in params' :key='param.name'><b>{{ param.name }} :</b> {{ param.desc }} (For example: <code>{{ param.example }}</code>)</li>
      </ul>
      <p class='mt-4 mb-1 text-h6 white--text'>Example constructor:</p>
      <slot name='constructor' />
    </v-card-text>
    <v-card-title id='properties'>Properties</v-card-title>
    <v-card-subtitle v-if='classExtends'>
      The {{ name }} contains all properties from <type :name='classExtends.type' :promise='classExtends.promised' :array='classExtends.arrayOf' :internal='classExtends.internal' :version='classExtends.version' />.
      <p v-if='properties.length > 0'>The {{ name }} also contains the following properties.</p>
      <p v-else>The {{ name }} contains no properties of its own.</p>
    </v-card-subtitle>
    <v-card-subtitle v-else>
      <p v-if='properties.length > 0'>The {{ name }} contains the following properties.</p>
      <p v-else>The {{ name }} contains no properties of its own.</p>
    </v-card-subtitle>
    <v-card-text v-if='properties.length > 0'>
      <v-list flat>
        <div v-for='(property, i) in properties' :key='i'>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ property.name }} <doc-chip v-for='label in property.labels' :type='label' :key='label' /></v-list-item-title>
              <v-list-item-subtitle>
                <p class='mb-0 text-wrap'><span v-html='property.desc' /> For example:<br/></p>
                <code class='d-block mt-2 mb-6 pa-2'>{{ property.example }}</code>
                <ul>
                  <li><b>Type :</b> <type :name='property.type' :promise='property.promised' :array='property.arrayOf' :internal='property.internal' :version='property.version' /></li>
                </ul>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class='my-4' v-if='i !== properties.length - 1' />
        </div>
      </v-list>
    </v-card-text>
    <v-card-title id='methods'>Methods</v-card-title>
    <v-card-subtitle v-if='classExtends'>
      The {{ name }} contains all methods from <type :name='classExtends.type' :promise='classExtends.promised' :array='classExtends.arrayOf' :internal='classExtends.internal' :version='classExtends.version' />.
      <p v-if='methods.length > 0'>The {{ name }} also contains the following methods.</p>
      <p v-else>The {{ name }} contains no methods of its own.</p>
    </v-card-subtitle>
    <v-card-subtitle v-else>
      <p v-if='methods.length > 0'>The {{ name }} contains the following methods.</p>
      <p v-else>The {{ name }} contains no methods of its own.</p>
    </v-card-subtitle>
    <v-card-text>
      <v-list flat>
        <div v-for='(method, i) in methods' :key='i'>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ method.name }}({{ method.parameters.map(p => p.name).join(', ') }}) <doc-chip v-for='label in method.labels' :type='label' :key='label' /></v-list-item-title>
              <v-list-item-subtitle>
                <p class='text-wrap' v-html='method.desc' />
                <p class='mb-0' v-if='method.parameters.length > 0'>Parameters: </p>
                <ul v-if='method.parameters.length > 0'>
                  <li class='text-wrap' v-for='param in method.parameters' :key='param.name'>
                    <b>{{ param.name }} :</b> ( <type :name='param.type' :promise='param.promised' :array='param.arrayOf' :internal='param.internal' :version='param.version' /> ) : <span  v-html='param.desc' />
                  </li>
                </ul>
                <p class='mt-4 mb-0'>For example:</p>
                <code class='d-block mt-2 mb-6 pa-2'>{{ method.example }}</code>
                <ul>
                  <li class='text-wrap'><b>Returns :</b> ( <type :name='method.type' :promise='method.promised' :array='method.arrayOf' :internal='method.internal' :version='method.version' /> ) : <span v-html='method.returns' />
                  </li>
                </ul>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class='my-4' v-if='i !== methods.length - 1' />
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'doc-class',
  props: {
    title: String,
    classExtends: Object,
    desc: String,
    name: String,
    params: Array,
    properties: Array,
    methods: Array
  }
};
</script>

<style scoped>

</style>
