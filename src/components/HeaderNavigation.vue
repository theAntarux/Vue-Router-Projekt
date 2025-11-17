<script lang="ts">
import { defineComponent } from 'vue'
import { DestinationStore } from '@/stores/DestinationStore';

export default defineComponent({
    name: 'HeaderNavigation',
    computed: {
      Destinations() {
         return DestinationStore().GetDestinations()
      }
    }
})
</script>

<template>
   <header>
      <nav id="nav">
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="totally-legit-page-lololol">404</RouterLink>
         <RouterLink 
            v-for="Destination in Destinations" 
            :key="Destination.id"
            :to="{name: 'destination', params: { DestinationName: Destination.name }}"
         >
         {{ Destination.name }}
         </RouterLink>
      </nav>
   </header>

   <div class="container">
      <RouterView />
   </div>
</template>
