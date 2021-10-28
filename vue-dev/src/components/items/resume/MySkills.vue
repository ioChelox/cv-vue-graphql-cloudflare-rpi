<template>
  <div>        
        <v-card-title>
            <v-chip
                class="ma-2"
                color="green"
                text-color="white"
                label
            >
            <div v-if="mySkills">
                {{mySkills[0].lblMySkills}}
            </div>
            </v-chip>
        </v-card-title>
        <v-card-text>
            <!-- Row 1 -->
            <v-row
                key="ms1"
                class="mb-6"
                no-gutters
            >
            <!-- Resume: Experience -->
            <v-col
                key="ms2"
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
                    <v-icon>mdi-billboard</v-icon>
                    </v-avatar>
                    <div v-if="mySkills">
                        {{mySkills[0].lblDesign}}
                    </div>
                </v-chip>
                </v-card-title>
                <v-card-text>
                <!-- Resume: LinearSkills -->
                <div v-if="mySkills">
                    <LinearSkills 
                        v-for="(linearSkill, i) in mySkills[0].linearSkills"
                        :key="i"
                        :name="linearSkill.name" 
                        :percent="linearSkill.percent"
                    />
                </div>
                </v-card-text>
                </v-card>
            </v-col>
            <v-divider
                class="mx-4"
                vertical
            ></v-divider>
            <!-- MySkills: Language -->
            <v-col
                key="ms6"
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
                    <v-icon>mdi-flag-variant</v-icon>
                    </v-avatar>
                    <div v-if="mySkills">
                        {{mySkills[0].lblLanguage}}
                    </div>
                </v-chip>
                </v-card-title>
                <v-card-text>
                <!-- LanguageSkills -->
                    <div v-if="mySkills">
                        <LanguageSkills  
                            v-for="(languageSkill, i) in mySkills[0].languageSkills"
                            :key="i"
                            :language="languageSkill.language" 
                            :rating="languageSkill.rating"
                        />
                    </div>
                </v-card-text>
                </v-card>
            </v-col>
            </v-row>
            <!-- CODING AND KNOWLEDGE -->
            <!-- Row 2 -->
            <v-row
                key="ms11"
                class="mb-6"
                no-gutters
            >
            <!-- Resume: Experience -->
            <v-col
                key="ms12"
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
                    <v-icon>mdi-code-tags</v-icon>
                    </v-avatar>
                    <div v-if="mySkills">
                        {{mySkills[0].lblCoding}}
                    </div>
                </v-chip>
                </v-card-title>
                <v-card-text>
                <!-- CodingSkills -->
                <div v-if="mySkills">
                    <CodingSkills 
                        v-for="(codingSkill, i) in mySkills[0].codingSkills"
                        :key="i"
                        :numberOne="codingSkill.numberOne" 
                        :labelOne="codingSkill.labelOne"
                        :numberTwo="codingSkill.numberTwo" 
                        :labelTwo="codingSkill.labelTwo"
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
                key="ms25"
                class="text-center"
            >
                <v-card
                class="text-left"
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
                    <v-icon>mdi-codepen</v-icon>
                    </v-avatar>
                    <div v-if="mySkills">
                        {{mySkills[0].lblKnowledge}}
                    </div>
                </v-chip>
                </v-card-title>
                <v-card-text>
                    <div v-if="mySkills">
                        <KnowledgeSkills 
                            v-for="(knowledgeSkill, i) in mySkills[0].knowledgeSkills"
                            :key="i"
                            :label="knowledgeSkill" 
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
import LinearSkills from './LinearSkills.vue';
import LanguageSkills from './LanguageSkills.vue';
import CodingSkills from "./CodingSkills.vue";
import KnowledgeSkills from "./KnowledgeSkills.vue";
import { MY_SKILLS } from "../queries";

export default {
    name: "MySkills",
    components: {
        LinearSkills,
        LanguageSkills,
        CodingSkills,
        KnowledgeSkills
    },
    apollo: {
        mySkills : {
            query: MY_SKILLS
        }
    },
    data () {
        return {
        mySkills: null,
        myskills_label: 'My Skills',
        design_label: 'DESIGN',
        linear_skills: [
            {name:  'Web Design', percent_val: '80'},
            {name:  'Backend Services', percent_val: '60'},
            {name:  'Flutter', percent_val: '50'},
        ],
        language_label: 'LANGUAGES',
        language_skills: [
            {language:  'English', rating: '8'},
            {language:  'Spanish', rating: '10'},
        ],
        coding_label: 'CODING',
        coding_skills: [
            {number_one: '65', label_one: 'Node.js',number_two: '35', label_two: 'Python'},
            {number_one: '65', label_one: 'Vue.js', number_two: '35', label_two: 'Flutter'},
        ],
        knowledge_skills: [
            {label: 'Website hosting'},
            {label: 'Android and iOS apps'},
            {label: 'Arduino and Raspberry Pi Dev'},
        ],
        knowledge_label: 'KNOWLEDGE',
        dense: true,
        inset: true,
     }}
}
</script>

<style>

</style>