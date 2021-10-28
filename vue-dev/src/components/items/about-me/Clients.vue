<template>
<div>
    <!-- CLIENTS -->
    <v-card-title>
        <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            label
        >
        <div v-if="clients">
            {{clients[0].lblClients}}
        </div>
        </v-chip>
    </v-card-title>
    <v-card-text>
        <!-- Row 1 -->
        
        <!-- Web Development -->
       
        <div v-if="clients">
            <v-row
                key="cl1"
                justify="center"
                align="center"
                no-gutters
            >
            <ClientList
                :srcOne="clients[0].clients[0].srcBg"
                :srcTwo="clients[0].clients[1].srcBg"
            />
            <ClientList
                :srcOne="clients[0].clients[2].srcBg"
                :srcTwo="clients[0].clients[3].srcBg"
            />
            </v-row>
        </div>
       
        <!-- Mobile Hybrid Development -->
        <!-- <v-col
            key="cl3"
            class="text-center"
        >
            <v-card>
                <v-avatar
                    size="250"
                ><v-img height="100px" :src="clients_two_img_url"></v-img></v-avatar>
            </v-card>
        </v-col>
        <v-col
            key="cl4"
            class="text-center"
        >
            <v-card>
                <v-avatar
                    size="250"
                ><v-img height="100px" :src="clients_one_img_url"></v-img></v-avatar>
            </v-card>
        </v-col>
       <v-col
            key="cl5"
            class="text-center"
        >
            <v-card>
                <v-avatar
                    size="250"
                ><v-img height="100px" :src="clients_one_img_url"></v-img></v-avatar>
            </v-card>
        </v-col> -->
        <!-- </v-row> -->
</v-card-text>  
</div> 
</template>

<script>
import ClientList from './ClientList';
import { CLIENTS } from '../queries';

export default {
    name: "Clients",
    components:{
        ClientList
    },
    apollo:{
        clients:{
            query: CLIENTS
        }
    },
    data: () => ({
        clients: null,
        // clients_label: 'Clients',
        // clients_one_img_url: 'https://www.nerdsonsite.com/wp-content/uploads/2019/07/nerds-on-site-car@2x.png',
        // clients_two_img_url: 'https://oneextraguy.com/wp-content/uploads/2017/02/logo.jpg',
    })
}
</script>

<style>

</style>