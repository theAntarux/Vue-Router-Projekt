<script lang="ts">
import { defineComponent } from 'vue'
import { DestinationStore } from '@/stores/DestinationStore';

export default defineComponent({
    name: 'DestinationView',
    props: {
        DestinationName: {
            type: String,
            required: true
        },
    },
    computed: {
        Destination() {
            return DestinationStore().GetDestinationByName(this.DestinationName)
        }
    },
})
</script>

<template>
    <div class="destination-details">
        <button class="back-button" @click="$router.push('/')">BACK</button>
        <p>{{ Destination?.description }}</p>
        <img :src="`/images/${ Destination?.image }`" :alt="Destination?.name" />
        
    </div>

    <RouterView />
</template>
