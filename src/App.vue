<template>
  <v-app>
    <v-sheet>
      <v-main>
        <router-view />
      </v-main>
      <Snackbar />
    </v-sheet>
  </v-app>
</template>

<script>
import Snackbar from './components/snackbars/Snackbar'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { Snackbar },
  computed: {
    ...mapGetters(['isPrimaryBackground'])
  }
}
</script>
