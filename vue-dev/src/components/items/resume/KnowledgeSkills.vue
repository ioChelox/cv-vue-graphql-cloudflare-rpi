<template>
  <div>
    <v-row
        key="ms26"
       
    >
    <v-list dense disabled>
        <v-list-item-group color="primary">
        <v-list-item>
            <v-list-item-icon>
            <v-icon small color="green">mdi-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{label}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list-item-group>
    </v-list>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "KnowledgeSkills",
    props: {
        label: String
    }
}
</script>

<style>

</style>