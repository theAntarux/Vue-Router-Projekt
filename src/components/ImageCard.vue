<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ImageCard',
    props: {
        ObjectData: {
            type: Object,
            required: true,
        }
    }
})
</script>

<template>
    <div class="card">
        <img :src="`/images/${ ObjectData.image }`" :alt="ObjectData.name" />
        <div class="card_text">{{ ObjectData.name }}</div>
    </div>
</template>