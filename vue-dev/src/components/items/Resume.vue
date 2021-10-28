<template>
  <div>
    <v-card-title>
        <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            label
        >
        <div v-if="resume">
            {{resume[0].lblResume}}
        </div>
        </v-chip>
    </v-card-title>
    <v-card-text>
        <!-- Row 1 -->
        <v-row
            key="rm1"
            class="mb-6"
            no-gutters
        >
        <!-- Resume: Experience -->
        <v-col
            key="rm2"
            class="text-center"
        >
            <v-card
                class="center"
                max-width="200"
            >
            <v-card-title>
            <v-chip
                color="gray"
                label
            >
                <v-avatar
                    left
                    class="gray"
                >
                <v-icon>mdi-briefcase</v-icon>
                </v-avatar>
                <div v-if="resume">
                    {{resume[0].lblExperience}}
                </div>
            </v-chip>
            </v-card-title>
            <v-card-text>
            <v-divider inset="inset"></v-divider>
            <div v-if="resume">
                <ResumeList 
                    :lapse="resume[0].experience[0].lapse"
                    :position="resume[0].experience[0].position"
                    :title="resume[0].experience[0].title"
                    :desc="resume[0].experience[0].desc"
                />
            </div>
            <v-divider inset="inset"></v-divider>
            <div v-if="resume">
                <ResumeList 
                    :lapse="resume[0].experience[1].lapse"
                    :position="resume[0].experience[1].position"
                    :title="resume[0].experience[1].title"
                    :desc="resume[0].experience[1].desc"
                />
            </div>
            </v-card-text>
            </v-card>
        </v-col>
        <v-divider
            class="mx-4"
            vertical
        ></v-divider>
        <!-- Resume: Education -->
        <v-col
            key="rm11"
            class="text-center"
        >
            <v-card
                class="center"
                max-width="200"
            >
            <v-card-title>
            <v-chip
                color="gray"
                label
            >
                <v-avatar
                    left
                    class="gray"
                >
                <v-icon>mdi-school</v-icon>
                </v-avatar>
                <div v-if="resume">
                    {{resume[0].lblEducation}}
                </div>
            </v-chip>
            </v-card-title>
            <v-card-text>
            <v-divider inset="inset"></v-divider>
            <div v-if="resume">
                <ResumeList 
                    :lapse="resume[0].education[0].lapse"
                    :position="resume[0].education[0].position"
                    :title="resume[0].education[0].title"
                    :desc="resume[0].education[0].desc"
                />
            </div>
            <v-divider inset="inset"></v-divider>
            <div v-if="resume">
                <ResumeList 
                    :lapse="resume[0].education[1].lapse"
                    :position="resume[0].education[1].position"
                    :title="resume[0].education[1].title"
                    :desc="resume[0].education[1].desc"
                />
            </div>
            </v-card-text>
            </v-card>
        </v-col>
        </v-row>
    </v-card-text>
  </div>
</template>

<script>
import ResumeList from "./resume/ResumeList";
import { RESUME } from './queries';

export default {
    name: "Resume",
    apollo:{
        resume:{
            query: RESUME
        }
    },
    components:{
        ResumeList
    },
    data: () => ({
        resume: null,
     })
}
</script>

<style>

</style>