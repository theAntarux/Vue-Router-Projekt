<script lang="ts">
import { defineComponent } from 'vue';
import { DestinationStore } from '@/stores/DestinationStore';

export default defineComponent({
    name: 'HomeView',
    computed: {
        Destinations() {
            return DestinationStore().GetDestinations()
        }
    }
})
</script>

<template>
    <div class="home">
        <h1>All Destinations</h1>
        <div class="destinations">
            <RouterLink
               v-for="Destination in Destinations"
               :key="Destination.id"
               :to="{name: 'destination', params: { DestinationName: Destination.name }}"
            >
            <img :src="`/images/${ Destination.image }`" :alt="Destination.name" />
            </RouterLink>
        </div>
    </div>
</template>
