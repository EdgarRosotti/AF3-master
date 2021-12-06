<template>
  <v-app>
    <v-main>
      <toolbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  
  import toolbar from './components/toolbar.vue'

  export default {
    name: 'App',


    components: {
        toolbar,
    },

    data: () => ({
      //
    }),
  };
</script>
