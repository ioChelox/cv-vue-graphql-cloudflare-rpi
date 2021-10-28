<template>
  <div>
        <!-- PRICING -->
        <v-card-title>
            <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                label
            >
            <div v-if="pricing">
                {{pricing[0].lblPricing}}
            </div>
            </v-chip>
        </v-card-title>
            <!-- Row 1 -->
            <v-row
                key="1"
                class="mb-6"
                no-gutters
            >
            <v-col
                key="ms21"
                class="text-left"
            >  
            <div v-if="pricing">
                 <!-- PricingList -->
                <PricingList 
                    :label=pricing[0].price[0].label
                    :number=pricing[0].price[0].number
                    :lapse=pricing[0].price[0].lapse
                    :descs=pricing[0].price[0].desc
                    :lblBuy=pricing[0].price[0].labelBuy
                />
            </div>
            </v-col>
            <v-divider
                class="mx-4"
                vertical
            ></v-divider>
            <v-col
                key="ms2"
                class="text-left"
            >  
            <div v-if="pricing">
                 <!-- PricingList -->
                <PricingList 
                    :label=pricing[0].price[1].label
                    :number=pricing[0].price[1].number
                    :lapse=pricing[0].price[1].lapse
                    :descs=pricing[0].price[1].desc
                    :lblBuy=pricing[0].price[1].labelBuy
                />
            </div>
            </v-col>
        </v-row>
       
  </div>
</template>

<script>
import { PRICING } from '../queries.js';
import PricingList from './PricingList';

export default {
    name: "Pricing",
    components:{
        PricingList
    },
    apollo:{
        pricing: {
            query: PRICING
        }
    },
    data: () => ({
        pricing: null,
        // pricing_label: 'Pricing',
        // pricing_basic_label: 'Basic',
        // pricing_basic_number: '15',
        // pricing_lapse: 'hour',
        // pricing_basic_one: 'Web Development',
        // pricing_basic_two: 'Advertising',
        // pricing_basic_three: 'Game Development',
        // pricing_basic_four: 'Music Writing',
        // pricing_basic_five: 'Photography',
        // pricing_basic_label_buy: 'BUY BASIC',
        // pricing_pro_label: 'Pro',
        // pricing_pro_number: '20',
        // pricing_pro_one: 'Web Development',
        // pricing_pro_two: 'Advertising',
        // pricing_pro_three: 'Game Development',
        // pricing_pro_four: 'Music Writing',
        // pricing_pro_five: 'Photography',
        // pricing_pro_label_buy: 'BUY PRO',
        
    })
}
</script>

<style>

</style>