<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageNotFound',
})
</script>

<template>
    <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <button class="back-button" @click="$router.push('/')">BACK HOME</button>
        <img :src="`/images/meme.jpg`" :alt="`404 - Page Not Found`"/>
    </div>
</template>