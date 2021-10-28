<template>
  <div>
        <v-divider class="ma-4" inset></v-divider>
        <v-row
            key="ms1"
            class="mb-6"
            justify="center"
           
            no-gutters
        >
        <v-col
            key="ms2"
            class="text-left"
            
        >  
            <v-card
                class="mx-auto"
                max-width="200"
                
            >  
            <v-img
                class="white--text align-center"
                height="auto"
                :src="srcBgOne"
            >
                
            </v-img>
            <v-card-subtitle class="pb-0">{{subTitleOne}}</v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{descOne}}</div>
            </v-card-text>
            </v-card>       
        </v-col>
        <v-divider
            class="mx-4"
            vertical
        ></v-divider>
        <v-col
            key="ms3"
            class="text-left"
            
        >
            <v-card
                class="mx-auto"
                max-width="200"
            >
            <v-img
                class="white--text align-end"
                height="auto"
                :src="srcBgTwo"
            >
                <v-card-title>{{titleTwo}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{subTitleTwo}}</v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{descTwo}}</div>
            </v-card-text>
            </v-card> 
        </v-col>
        </v-row>
  </div>
</template>

<script>

export default {
    name: "ServicesList",
    props: {
        titleOne: String,
        subTitleOne: String,
        descOne: String,
        srcBgOne: String,
        titleTwo: String,
        subTitleTwo: String,
        descTwo: String,
        srcBgTwo: String,
    },
}
</script>

<style>

</style>