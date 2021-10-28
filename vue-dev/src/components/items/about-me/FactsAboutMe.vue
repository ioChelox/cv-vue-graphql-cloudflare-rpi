<template>
  <div>
        <v-row
            key="ab4"
            class="mb-12"
            align="center"
            justify="center"
            no-gutters
        >
        <v-col
            key="ab5"
            class="text-left"
        >
        <v-card>
            <v-chip
                class="ma-2"
                color="green"
                width="12"
                text-color="white"
            >
               <div class="caption"> {{label}} </div>
            </v-chip>
        </v-card>
        </v-col>
        <v-col
            key="ab6"
            class="text-right"
        >
        <v-card>
            <v-chip
                class="ma-2"
                color="primary"
                text-color="white"
            >
                <div class="caption"> {{desc}} </div>
            <v-icon small right>{{icon}}</v-icon>
            </v-chip>
        </v-card>
        </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
    name: "FactsAboutMe",
    props: {
        label: String,
        desc: String,
        icon: String
    }
}
</script>

<style>
.v-text-field{
    font-size: 0.9em;
}
</style>