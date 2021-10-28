<template>
    <div>
        <v-card-title>
            <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                label
            >
            <div v-if="services">{{services[0].lblMyServices}}</div>
            </v-chip>
        </v-card-title>
        <v-card-text>
            <div v-if="services">
            <ServicesList 
                v-for="(service, i) in services[0].services"
                :key="i"
                :titleOne="service.titleOne" 
                :subTitleOne="service.subTitleOne"
                :descOne="service.descOne"
                :srcBgOne="service.srcBgOne"
                :titleTwo="service.titleTwo" 
                :subTitleTwo="service.subTitleTwo"
                :descTwo="service.descTwo"
                :srcBgTwo="service.srcBgTwo"
            />
        </div>
        </v-card-text>
    </div>
</template>

<script>
import ServicesList from './ServicesList.vue';
import { SERVICES } from '../queries.js';

export default {
    name: "MyServices",
    components: {
        ServicesList
    },
    apollo:{
        services:{
            query: SERVICES,
        }
    },
    data: () => ({
        services: null,
        // my_services_label: 'My Services',
        // services_list: [
        //     {
        //         title_one:'Web Development', subtitle_one:'Vue.js', desc_one:'This CV was development under Vue.js. Here is the Product', src_bg_one:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        //         title_two:'Mobile Hybrid Dev', subtitle_two:'Flutter', desc_two:'Recently work with Flutter to deploy.Here is the Product', src_bg_two:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        //     },
        //     {
        //         title_one:'Python Developer', subtitle_one:'Python as Backservice', desc_one:'Python as Backservice Working on multiple projects with Python, Pandas, Requests, Selenium, API, etc. Here is the Product',src_bg_one:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        //         title_two:'Robotics Dev', subtitle_two:'Arduino and Raspberry PI', desc_two:'Private works with Arduino, NodeMCU, Raspberry PI, GSM, CNC, Follow cars, etc. Here is the Product',src_bg_two:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        //     },
        // ],
    })
}
</script>

<style>

</style>