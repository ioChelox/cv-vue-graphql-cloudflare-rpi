<template>
    <div> 
        <v-row
            key="ms13"
            justify="center"
            align="center"
        >
        
            <v-col
                key="ms14"
                class="text-center"
                cols="6"
            >
                <v-progress-circular
                    rotate="0"
                    size="42"
                    value="65"
                    width="4"
                    color="green"
                >{{numberOne}}</v-progress-circular>
                
            </v-col>
            
            <v-col
                key="ms15"
                class="text-center"
                cols="6"
            >
            
            
                <v-progress-circular
                    rotate="0"
                    size="42"
                    value="65"
                    width="4"
                    color="green"
                >{{numberTwo}}</v-progress-circular>
            </v-col>
        </v-row>
        <v-row
            key="ms16"
            
            
        >
            <v-col
                key="ms17"
                class="v-text-field font-weight-black text-center"
                cols="6"
            >{{labelOne}}
            </v-col>
            <v-col
                key="ms18"
                class="v-text-field font-weight-black text-center"
                cols="6"
            >{{labelTwo}}
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "CodingSkills",
    props: {
        numberOne: String,
        labelOne: String,
        numberTwo: String,
        labelTwo: String,
    }
}
</script>

<style>
.v-text-field{
    font-size: 0.7em;
}
</style>