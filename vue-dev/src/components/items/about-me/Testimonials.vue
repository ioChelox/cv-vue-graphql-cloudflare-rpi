<template>
  <div>
    <v-card-title>
        <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            label
        >
        <div v-if="testimonials">
            {{testimonials[0].lblTestimonials}}
        </div>
        </v-chip>
    </v-card-title>
    <v-card-text>
        <!-- Row 1 -->
        <v-carousel
            v-if="testimonials"
            cycle
            height="300"
            hide-delimiter-background
            show-arrows-on-hover
        >
            <v-carousel-item
                
                v-for="(slide, i) in testimonials[0].testimonials"
                :key="i"
            >
            <v-sheet
                :color="color"
                height="50%"
            >
                <v-row
                    class="fill-height display-1"
                    align="center"
                    justify="center"
                >
                    <div>{{ slide.testimonial }}</div>
                </v-row>
                <v-row
                    align="center"
                    justify="center"
                >
                    <div class="title font-weight-black">{{ slide.name }}</div>
                </v-row>
            </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-card-text>
  </div>
</template>

<script>
import { TESTIMONIALS } from '../queries';

export default {
 name: "Testimonials",
 apollo: {
     testimonials:{
         query: TESTIMONIALS
     }
 },
 data: () => ({
    testimonials: null,
    testimonials_label: 'Testimonials',
    color: 'gray',
    slides: [
        {name: 'Marcelo', testimonial:'Great work!'},
        {name: 'Juan Paco', testimonial:'Beautiful designs!'},
        {name: 'Pedro', testimonial:'Innovative!'},
    ],
 }),
}
</script>

<style>

</style>