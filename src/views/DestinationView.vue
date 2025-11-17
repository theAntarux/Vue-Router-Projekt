<script lang="ts">
import { defineComponent } from 'vue'
import { DestinationStore } from '@/stores/DestinationStore';
import ExperienceView from '@/views/ExperienceView.vue';

export default defineComponent({
    name: 'DestinationView',
    props: {
        DestinationName: {
            type: String,
            required: true
        }
    },
    computed: {
        Destination() {
            return DestinationStore().GetDestinationByName(this.DestinationName)
        }
    },
    components: {
        ExperienceView
    }
})
</script>

<template>
    <button @click="$router.back()">GO BACK</button>
    <div class="destination-details">
        <p>{{ Destination?.description }}</p>
        <img :src="`/images/${ Destination?.image }`" :alt="Destination?.name" />
    </div>
    <ExperienceView />
</template>
