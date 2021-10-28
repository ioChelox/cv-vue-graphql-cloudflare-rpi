<template>
    <v-card
        tile
        max-width="529"
        height="800"
        class="d-flex justify-center text-center"
    >
        <v-img
            v-if="personalInfo"
            width="329"
            :src="personalInfo[0].bgImage"
        >
        <v-row
            justify="center"
            align="center"
            class="fill-height"
        >
            <v-col
            >
                <v-avatar
                    class="profile"
                    color="grey"
                    size="144"
                >
                <div v-if="personalInfo">
                    <v-img src="../assets/myImage.png"></v-img>
                    <!-- <v-img :src="personalInfo[0].myImage"></v-img> -->
                </div>
                </v-avatar>
            </v-col>
            <v-col class="py-0">
                <v-list-item
                    color="rgba(0, 0, 0, .4)"
                    dark
                >
                    <v-list-item-content v-if="personalInfo">
                        <v-list-item-title class="title">{{personalInfo[0].fullName}}</v-list-item-title>
                        <v-list-item-subtitle>{{personalInfo[0].degree}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
        </v-col>
        </v-row>
        </v-img>
    </v-card>
</template>

<script>
import { PERSONAL_INFO } from "./items/queries";

export default {
  name: "Avatar",
  apollo:{
      personalInfo:{
          query: PERSONAL_INFO
      }
  },
  data: () => ({
    personalInfo: null,
    usr_name: 'Marcelo Sanchez Salazar',
    url_image_bg: 'https://bslthemes.com/ryan/demo/images/bg.jpg',
    url_image_profile: 'https://bslthemes.com/ryan/demo/images/profile.png',
    professional_degree: 'Systems Engineer',
  })
};
</script>
