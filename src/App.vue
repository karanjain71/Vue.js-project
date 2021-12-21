<template>
  <v-app>
    <h2 class="mt-10 ml-5">Sample Application</h2>
    <v-main>
      <Dropdown/>
    </v-main>
  </v-app>
</template>

<script>
import Dropdown from './components/Dropdown'

export default {
  name: 'App',

  components: {
    Dropdown
  },

  data: () => ({
    //
  }),
};
</script>
