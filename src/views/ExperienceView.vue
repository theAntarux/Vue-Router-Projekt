<script lang="ts">
import { defineComponent } from 'vue'
import { DestinationStore } from '@/stores/DestinationStore';
import ExperienceCard from '@/components/ExperienceCard.vue';

export default defineComponent({
    name: 'ExperienceView',
    props: {
        DestinationName: {
            type: String,
            required: true,
        }
    },
    computed: {
        Experiences() {
            return DestinationStore().GetExperiencesFromDestination(this.DestinationName)
        }
    },
    components: {
        ExperienceCard
    }
})
</script>

<template>
    <div class="experiences">
        <div class="cards">
            <RouterLink v-for="Experience in Experiences" :key="Experience.name" :to="{name: 'experience', params: { ExperienceName: Experience.name }}">
                <ExperienceCard :Experience="Experience" />
            </RouterLink>
        </div>
    </div>
</template>