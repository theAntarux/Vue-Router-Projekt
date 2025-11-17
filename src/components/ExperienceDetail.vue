<script lang="ts">
import { defineComponent } from 'vue'
import { DestinationStore } from '@/stores/DestinationStore';

export default defineComponent({
    name: 'ExperienceDetail',
    props: {
        DestinationName: {
            type: String,
            required: true,
        },
        ExperienceName: {
            type: String,
            required: true,
        }
    },
    computed: {
        Experience() {
            return DestinationStore().FindExperienceFromDestination(this.DestinationName, this.ExperienceName)
        }
    }
})
</script>

<template>
    <div class="experience-details">
        <button class="back-button" @click="$router.back()">BACK TO EXPERIENCES</button>
        <img :src="`/images/${ Experience?.image }`" :alt="Experience?.name" />
        <p>{{ Experience?.description }}</p>
    </div>
</template>