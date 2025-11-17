<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ExperienceCard',
    props: {
        Experience: {
            type: Object,
            required: true,
        }
    }
})
</script>

<template>
    <div class="card">
        <img :src="`/images/${ Experience.image }`" :alt="Experience.name" />
        <div class="card_text">{{ Experience.name }}</div>
    </div>
</template>