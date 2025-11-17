<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'TheNavigation'
})

</script>

<template>
   <header>
    <nav id="nav">
       <RouterLink to="/">Home</RouterLink>
    </nav>
   </header>

   <div class="container">
    <RouterView />
   </div>
</template>
