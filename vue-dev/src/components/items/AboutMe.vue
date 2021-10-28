<template>

    <div > 
        <v-card-title>
            <v-chip
                class="ma-2"
                color="green lighten"
                label
                text-color="white"
            >
            <div v-if="am" class="caption">
                {{am[0].lblAboutMe}}
            </div>
            </v-chip>
        </v-card-title>
        <v-card-text >
            <v-row
                key="ab1"
                class="mb-6"
                no-gutters
            >
            <v-col
                key="ab2"
                class="text-left"
            >
                <v-card
                    class="pa-2"
                >
                 <div v-if="am">
                    {{am[0].aboutMe}}
                 </div>
                </v-card>
            </v-col>
            <v-divider
                class="mx-4"
                vertical
            ></v-divider>
            <v-col
                key="ab3"
                class="text-left"
                v-if="fam"
            >
                <!-- FactsAboutMe -->
                <FactsAboutMe
                    v-for="(fact, i) in fam[0].factsAboutMe"
                    :key="i"
                    :label="fact.label" 
                    :desc="fact.desc" 
                    :icon="fact.icon"
                />
            </v-col>
            </v-row>
        </v-card-text>
    </div>

</template>

<script>
import FactsAboutMe from './about-me/FactsAboutMe.vue';
import { ABOUT_ME, FACTS_ABOUT_ME } from './queries.js';

export default {
    name: "AboutMe",
    components: {
        FactsAboutMe
    },
    apollo: {
        fam: {
            // query: ABOUT_ME,
            query: FACTS_ABOUT_ME,
            // update: data
            // update: ({ cvms2 }) => cvms2.cvms.factsAboutMe,
        },
        am: {
            query: ABOUT_ME,
        }
        // fam: {
        //     query: FACTS_ABOUT_ME,
        // }
    },
    data() {
        return {
            fam: null,
            am: null,
            // usr_name: 'Marcelo Sanchez Salazar',
            // professional_degree: 'Systems Engineer',
            // about_me: 'My name is Marcelo Sanchez Salazar, Freelancer. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique.',
            // facts_about_me: [
            //     {label:'Age ..............',desc:'............ 39'},
            //     {label:'Residence ...',desc:'...... Bolivia'},
            //     {label:'Freelance .....',desc:'... Available'},
            // ],
            // about_me_label: 'About Me',
        }
    },
    // async mounted () {
    //     this.loading = true
    //     this.users = await this.$apollo.query({ query: GET_ALL_USERS_QUERY })
    //     this.loading = false
    // }
}
</script>

<style>
</style>

