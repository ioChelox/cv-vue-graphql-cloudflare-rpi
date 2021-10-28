<template>
    <v-col
        key="ff3"
        class="text-left"
    >
        <v-card
            class="text-center"
            max-width="200"
        >
        <v-icon >mdi-album</v-icon>
        <v-card-text class="text--primary">
        <div>{{number}}</div>
        <div v-for="(desc,i) in descs" :key="i">{{desc}}</div>
        </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "FunFactList",
    props: {
        number: String,
        descs: Array
    }
}
</script>

<style>

</style>