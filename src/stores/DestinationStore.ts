import { defineStore } from "pinia"
import { ref } from 'vue'
import DestinationsData from '@/assets/data.json'

type Experiences = {
    name: string
    slug: string
    image: string
    description: string
}

export type Destination = {
    name: string
    slug: string
    image: string
    id: number
    description: string
    experiences: Experiences[]
}

export const DestinationStore = defineStore('DestinationStore', () => {
    const DestinationsReference = ref(DestinationsData.destinations)

    // Returns destination from the destinations .json file, otherwise null
    const GetDestinationByName = (Name: string): Destination | null => {
        if (typeof Name !== 'string') {
            console.warn(`[DestinationStore] String expected, got ${typeof Name} instead`)
            return null
        }

        return DestinationsReference.value.find((Destination) => Destination.name === Name) || null
    }

    const GetDestinations = (): Destination[] => {
        return DestinationsReference.value
    }

    return { GetDestinationByName, GetDestinations }
})