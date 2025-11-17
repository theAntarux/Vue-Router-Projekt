<script lang="ts">
import { defineComponent } from 'vue'
import { DestinationStore } from '@/stores/DestinationStore';
import ImageCard from '@/components/ImageCard.vue';

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
        ImageCard
    }
})
</script>

<template>
    <div class="experiences">
        <div class="cards">
            <RouterLink v-for="Experience in Experiences" :key="Experience.name" :to="{name: 'experience', params: { ExperienceName: Experience.name }}">
                <ImageCard :ObjectData="Experience" />
            </RouterLink>
        </div>
    </div>
</template>