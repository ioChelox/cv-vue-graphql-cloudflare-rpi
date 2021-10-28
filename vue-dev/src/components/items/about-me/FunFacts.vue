<template>
<div>    
    <v-card-title>
        <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            label
        >
            <div v-if="funFacts">
                {{funFacts[0].lblFunFacts}}
            </div>
        </v-chip>
    </v-card-title>
    <v-card-text>
        <!-- Row 1 -->
        <v-row
            key="ff1"
            class="mb-6"
            no-gutters
        >
        
        <v-col cols="6">
            <!-- Web Development -->
            
            <div v-if="funFacts">
                
                <FunFactList 
                    :number="funFacts[0].funFacts[0].number"
                    :descs="funFacts[0].funFacts[0].desc"
                />
            </div>
             <!-- <v-divider
                class="mx-2"
                vertical
            ></v-divider> -->
        </v-col>
        <!-- Mobile Hybrid Development -->
        <v-col cols="6">
            <div v-if="funFacts">
                <FunFactList 
                    :number="funFacts[0].funFacts[1].number"
                    :descs="funFacts[0].funFacts[1].desc"
                />
            </div>
            <!-- <v-divider
                class="mx-2"
                vertical
            ></v-divider> -->
        </v-col>
        </v-row>
         <v-row
            key="ff1"
            class="mb-6"
            no-gutters
        >
        <v-col cols="6">
            <div v-if="funFacts">
                <FunFactList 
                    :number="funFacts[0].funFacts[2].number"
                    :descs="funFacts[0].funFacts[2].desc"
                />
            </div>
           
        </v-col>
            <v-col cols="6">
            <div v-if="funFacts">
                <FunFactList 
                    :number="funFacts[0].funFacts[3].number"
                    :descs="funFacts[0].funFacts[3].desc"
                />
            </div>
             
         </v-col>
        </v-row>
        
    </v-card-text>
</div>
</template>

<script>
import FunFactList from './FunFactList';
import { FUN_FACTS } from '../queries';

export default {
  name: "FunFacts",
  components:{
      FunFactList
  },
  apollo:{
      funFacts: {
          query: FUN_FACTS
      }
  },
  data: () => ({
        funFacts: null,
        // funfacts_label: 'Fun Facts',
        // funfacts_one_number:'80',
        // funfacts_one_desc1: 'Albumes',
        // funfacts_one_desc2: 'Listened',
        // funfacts_two_number:'80',
        // funfacts_two_desc1: 'Albumes',
        // funfacts_two_desc2: 'Listened',
        // funfacts_three_number:'80',
        // funfacts_three_desc1: 'Albumes',
        // funfacts_three_desc2: 'Listened',
        // funfacts_four_number:'80',
        // funfacts_four_desc1: 'Albumes',
        // funfacts_four_desc2: 'Listened',
    })
}
</script>

<style>

</style>