<template>
    <!-- vcard 3 : Description -->
    <div>
    <v-lazy
        v-model="isActive"
        :options="{
            threshold: .5
        }"
        min-height="300"
        transition="fade-transition"
    >
    <v-card
        max-width="529"
        class="d-flex justify-center "
    >
        <v-responsive
            class="overflow-y-auto"
            max-height="800"
        >
            <!--ABOUT-->
            <AboutMe v-if="showAboutMe"/>
            <!--MY SERVICES -->
            <MyServices v-if="showAboutMe" />
            <!-- PRICING -->
            <Pricing v-if="showAboutMe" />
            <!-- FUN FACTS -->
            <FunFacts v-if="showAboutMe" />
             <!-- CLIENTS -->
            <Clients v-if="showAboutMe" />
            <!-- TESTIMONIALS -->
            <Testimonials v-if="showAboutMe"/>
             <!-- RESUME -->
            <Resume v-if="showResume"/>
            <!-- MY SKILLS -->
            <MySkills v-if="showResume"/>
        </v-responsive>
    </v-card>
    </v-lazy>
    </div>
</template>

<script>
import AboutMe from './items/AboutMe.vue';
import MyServices from './items/about-me/MyServices.vue';
import Pricing from './items/about-me/Pricing.vue';
import FunFacts from './items/about-me/FunFacts.vue';
import Clients from './items/about-me/Clients.vue';
import Testimonials from './items/about-me/Testimonials.vue';
import Resume from './items/Resume.vue';
import MySkills from './items/resume/MySkills.vue';

export default {
    name: "Contents",
    components: {
        AboutMe,
        MyServices,
        Pricing,
        FunFacts,
        Clients,
        Testimonials,
        Resume,
        MySkills
    },
    data () {
        return {
            isActive: true,
            showAboutMe: true,
            showResume: false,
            showWorks: false,
        }
    },
    mounted() {
      this.$root.$on('changeAM', (key) => {
        console.log('Contents [key]: '+key);  
        switch (key) {
            case 'aboutme':
                this.$data.showAboutMe = true;  
                this.$data.showResume = false;
                this.$data.showWorks = false;
                console.log('Received from List: '+this.$data.showAboutMe);
                break;
            case 'resume':
                this.$data.showAboutMe = false;  
                this.$data.showResume = true;
                this.$data.showWorks = false;
                console.log('Received from List: '+this.$data.showResume);
                break;
            case 'works':
                this.$data.showAboutMe = false;  
                this.$data.showResume = false;
                this.$data.showWorks = true;
                console.log('Received from List: '+this.$data.showAboutMe);
                this.$data.showWorks = !this.$data.showWorks;  
                break;
        }
        
      })
    },
}
</script>

<style>

</style>