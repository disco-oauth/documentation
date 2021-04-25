<template>
<div class="center-all">
  <div style="font-size: 3rem;" v-if="!valid">
    This page does not exist
  </div>
  <div class="center-all" v-else>
    <do-card v-if="fileData">
      <template #header>
        <h1 v-text="filename"/>
        <p class="subtitle" v-text="classData.description" />
      </template>
      <template #default>
        <div class="center-stuff">
          <div class="container">
            <h2>Constructor</h2>
            <p class="subtitle" v-text="classConstructor.description" />
            <h3>Parameters</h3>
            <ul>
              <li v-for="param in classConstructor.params" :key="param.name">
                <strong v-text="param.name" /> [ {{ param.type.names.join('|') }} ] :: {{ param.description }}
              </li>
            </ul>
            <br />
            <h3>Example</h3>
            <code style="width: 100%" class="prettyprint" v-for="example in classConstructor.examples" :key="example" v-text="example" />
            <p v-if="!classConstructor.examples">No examples provided</p>
          </div>
          <hr class="c-divider" />
          <div class="container">
            <h2>Properties</h2>
            <p class="subtitle">A <code>{{ filename }}</code> object has the following properties.</p>
            <ul>
              <li v-for="prop in classData.properties" :key="prop.name">
                <strong v-text="prop.name" /> [ {{ prop.type.names.join('|') }} ] :: {{ prop.description }}
              </li>
            </ul>
          </div>
          <hr class="c-divider" v-if="classMethods" />
          <div class="container" v-if="classMethods">
            <h2>Methods</h2>
            <p class="subtitle">A <code>{{ filename }}</code> object has the following methods.</p>
            <div class="container" v-for="method in classMethods" :key="method.name">
              <h3>{{ method.name }}({{ method.params.map(p => p.name).join(', ') }})<do-label :type="method.async ? 'async' : 'chainable'" v-if="method.async || method.chainable" /></h3>
              <p class="subtitle" v-text="method.description" />
              <h4>Parameters</h4>
              <ul>
                <li v-for="param in method.params" :key="param.name" v-if="param.type">
                  <strong v-text="param.name" /> [ {{ param.type.names.join('|') }} ] :: {{ param.description }}
                </li>
              </ul>
              <h4 v-if="method.returns">Returns</h4>
              <ul>
                <li v-for="ret in method.returns" :key="ret.description">
                  [ {{ ret.type.names.join('|') }} ] :: {{ ret.description }}
                </li>
              </ul>
              <br />
              <h4>Example</h4>
              <code style="width: 100%" class="prettyprint" v-for="ex in method.examples" :key="ex" v-text="ex" />
              <p v-if="!method.examples">No examples provided</p>
              <hr class="c-divider" /><br/>
            </div>
          </div>
        </div>
      </template>
    </do-card>
  </div>
</div>
</template>

<script>
export default {
  name: "Files",
  data: () => ({
    valid: true,
    fileData: null,
    filename: null,
    classData: null,
    classConstructor: null,
    classMethods: null
  }),
  mounted() {
    PR.prettyPrint();
  },
  async asyncData({ params, store }) {
    store.commit('change', params.version);
    if (Object.keys(store.state.docFiles).includes(params.version)) {
      if (Object.keys(store.state.versions[store.state.version].Classes).includes(params.file)) {
        const filename = store.state.versions[params.version].Classes[params.file];
        const fileData = store.state.docFiles[params.version][filename];
        const classData = fileData.find(d => d.kind === 'class');
        const classConstructor = fileData.find(d => d.kind === 'constructor');
        const classMethods = fileData.filter(d => d.kind === 'function');
        return { valid: true, fileData, filename, classData, classConstructor, classMethods: classMethods.length > 0 ? classMethods : null };
      }
      else return { valid: false };
    }
    else return { valid: false };
  },
  head: {
    title: 'Docs'
  }
}
</script>

<style scoped>
.container {
  margin: 2rem 0 2rem 0;
}

.center-stuff > * {
  width: 100%;
}

.container:last-child {
  margin-bottom: 0 !important;
}
</style>
