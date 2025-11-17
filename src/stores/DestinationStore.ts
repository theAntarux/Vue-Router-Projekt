import { defineStore } from "pinia"
import { ref } from 'vue'
import DestinationsData from '@/assets/data.json'

// Dear lord why am I even doing types for this exercise lololol
type Experience = {
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
    experiences: Experience[]
}

export const DestinationStore = defineStore('DestinationStore', () => {
    const DestinationsReference = ref(DestinationsData.destinations)

    // Returns all the destinations from the current ref
    const GetDestinations = (): Destination[] => {
        return DestinationsReference.value
    }

    // Returns destination from the destinations .json file, otherwise null
    const GetDestinationByName = (DestinationName: string): Destination | null => {
        if (typeof DestinationName !== 'string') {
            console.warn(`[DestinationStore] String expected, got ${typeof DestinationName} instead`)
            return null
        }

        return DestinationsReference.value.find((Destination) => Destination.name === DestinationName) || null
    }

    // Returns experiences for the destination from referenced .json file, otherwise null
    const GetExperiencesFromDestination = (DestinationName: string): Experience[] | null => {
        if (typeof DestinationName !== 'string') {
            console.warn(`[DestinationStore] String expected, got ${typeof DestinationName} instead`)
            return null
        }

        const Destination = GetDestinationByName(DestinationName)
        if (!Destination) {
            return null
        }

        return Destination.experiences || [] // Just for consistency
    }

    // Finds certain experience from the experiences array of the destination, otherwise null
    const FindExperienceFromDestination = (DestinationName: string, ExperienceName: string): Experience | null => {
        if (typeof DestinationName !== 'string') {
            console.warn(`[DestinationStore] String expected, got ${typeof DestinationName} instead`)
            return null
        }

        const Experiences = GetExperiencesFromDestination(DestinationName)
        return Experiences?.find((Experience) => Experience.name === ExperienceName) || null
    }

    return { GetDestinationByName, GetDestinations, GetExperiencesFromDestination, FindExperienceFromDestination }
})