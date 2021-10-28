<template>
<div id="app" >
  <v-app id="inspire" 
  :style="{ backgroundImage: 'url(' + require('@/assets/bgapp13.jpg') + ')' }">
  >
    <v-container
      class="fill-height"
      fluid
    >
    <v-row
        align="start"
        justify="center"
      >
        <!-- vcard 1 : ListButtons -->
        <ListButtons />
        <!-- vcard 2 : Avatar -->
        <Avatar />
        <!-- vcard 3 : Contents -->
        <Contents />
    </v-row>
    </v-container>
    <v-footer app>
      <span>&copy; 2020</span>  
    </v-footer>
  </v-app>
</div>
</template>

<script>
import ListButtons from './components/ListButtons.vue';
import Avatar from './components/Avatar.vue';
import Contents from './components/Contents.vue';

  export default {
    name: 'LayoutsDemosBaselineFlipped',
    components: {
      ListButtons,
      Avatar,
      Contents
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
<style>

</style>