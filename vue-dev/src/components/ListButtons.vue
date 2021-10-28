<template>
    <v-card
       tile
        max-width="380"
        max-height="800"
        class="d-flex justify-start "
    >
      <v-card-actions>
        <v-list dense rounded>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              v-on:click="goTo(item.key)"
            > 
              <v-list-item-icon><v-icon small v-text="item.icon"></v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-caption" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-actions>
    </v-card>
</template>

<script>
import dotenv from 'dotenv'

dotenv.config()
export default {
  name: "ListButtons",
  data: () => ({
      items: [
        { text: 'About Me', icon: 'mdi-account', key: 'aboutme'},
        { text: 'Resume', icon: 'mdi-clock', key: 'resume'},
        { text: 'Works', icon: 'mdi-flag', key: 'works'},
      ],
  }),
  methods: {
    goTo (key) {
        console.log('ListButtons [key]: '+ key)
        console.log(process.env.VUE_APP_URL_GRAPQHL)
        this.$root.$emit('changeAM',key);
    }
  }
};
</script>
