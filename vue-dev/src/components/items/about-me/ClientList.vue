<template>
    <div>
    <v-col
        key="1"
        class="text-center"
       
    >
        <v-card
            
        >
            <v-avatar
                size="270"
            >
                <v-img  width="180px" height="90px" :src="srcOne"></v-img>
            </v-avatar>
        </v-card>
    </v-col>
    <v-col
        key="2"
        class="text-center"
        
    >
        <v-card
            max-width="210"
        >
        <v-avatar
            size="230"
        ><v-img  width="180px" height="90px" :src="srcTwo"></v-img></v-avatar>
        </v-card>
    </v-col>
    </div>
</template>

<script>
export default {
    name: "ClientList",
    props:{
        srcOne: String,
        srcTwo: String
    }
}
</script>

<style>

</style>