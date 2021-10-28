<template>
<div>
    
    <v-row
        key="ms3"
        class="mb-2"
        
    >
        {{name}}
    <v-progress-linear color="green" :value="percent"></v-progress-linear>
    </v-row>
   
</div>
    
</template>

<script>
export default {
    name: "LinearSkills",
    props: {
        name: String,
        percent: String
    }
}
</script>

<style>

</style>