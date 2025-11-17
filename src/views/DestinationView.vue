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
        ExperienceName: {
            type: String,
            required: false,
        }
    },
    computed: {
        Destination() {
            return DestinationStore().GetDestinationByName(this.DestinationName)
        }
    },
    data() {
        return {}
    }
})
</script>

<template>
    <button @click="$router.back()">GO BACK</button>

    <div class="destination-details">
        <p>{{ Destination?.description }}</p>
        <img :src="`/images/${ Destination?.image }`" :alt="Destination?.name" />
    </div>

    <RouterView />
</template>
