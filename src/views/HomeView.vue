<script lang="ts">
import { defineComponent } from 'vue';
import { DestinationStore } from '@/stores/DestinationStore';
import ImageCard from '@/components/ImageCard.vue';

export default defineComponent({
    name: 'HomeView',
    computed: {
        Destinations() {
            return DestinationStore().GetDestinations()
        }
    },
    components: {
        ImageCard
    }
})
</script>

<template>
    <main>
        <h1>All Destinations</h1>
        <div class="experiences">
            <div class="cards">
                <RouterLink
                    v-for="Destination in Destinations"
                    :key="Destination.id"
                    :to="{name: 'experiences', params: { DestinationName: Destination.name }}"
                >
                <ImageCard :ObjectData="Destination" />
                </RouterLink>
            </div>
        </div>
    </main>
</template>
