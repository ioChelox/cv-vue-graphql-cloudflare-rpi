<template>
    <div>
        <v-card
            class="text-center"
            max-width="200"
        >
        <v-icon >mdi-speedometer-slow</v-icon>
        <v-card-subtitle class="pb-0">
            <!-- <div v-if="pricing"> -->
                {{label}}
            <!-- </div> -->
        </v-card-subtitle>
        <v-card-text class="text--primary">
        <v-row align="center">
        <v-col class="display-1" cols="18">
        <v-badge
            class="pr-2"
            bordered
            color="green"
            icon="mdi-currency-usd"
            overlap
            right
        >
            {{number}}
        </v-badge>
            {{lapse}}
        </v-col>
        </v-row>

        <PricingDesc 
            v-for="(desc, i) in descs"
            :key="i"
            :desc="desc"
        />

        <!-- <div >{{pricing_basic_one}}</div>
        <div>{{pricing_basic_two}}</div>
        <div>{{pricing_basic_three}}</div>
        <div>{{pricing_basic_four}}</div>
        <div>{{pricing_basic_five}}</div> -->
        </v-card-text>
        <v-card-actions>
            <v-btn
                color="orange"
                text
            >{{lblBuy}}</v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import PricingDesc from './PricingDesc';

export default {
    name: "PricingList",
    components:{
        PricingDesc
    },
    props: {
        label: String,
        number: String, 
        lapse: String,
        descs: Array,
        lblBuy: String
    }
}
</script>

<style>

</style>