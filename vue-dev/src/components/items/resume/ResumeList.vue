<template>
  <div>
    <v-row
        key="rm3"
        class="mb-1 left"
        no-gutters
    >
    <v-chip
        class="mt-3"
        label
        color="green"
        outlined
    >
        {{lapse}}
    </v-chip>
    </v-row>
    <v-row
        key="rm4"
        class="mt-1 pt-2 text-left"
        no-gutters
    >
        {{position}}
    </v-row>
    <v-row
        key="rm5"
        no-gutters
    >
        {{title}}
    </v-row>
    <v-row
        key="rm6"
        class="mt-1 pt-2 text-left"
        no-gutters
    >
        {{desc}}
    </v-row>
  </div>
</template>

<script>
export default {
    name:"ResumeList",
    props: {
        lapse: String,
        position: String,
        title: String,
        desc: String,
    }
}
</script>

<style>

</style>