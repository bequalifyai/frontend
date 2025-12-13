import { defineStore } from "pinia"

interface HeaderState {
    pageTitle: string
    hiddeSidebar: boolean
    aiSuggestionsCount: number
}

export const useHeaderStore = defineStore('header', {
    state: (): HeaderState => ({
        pageTitle: '',
        hiddeSidebar: false,
        aiSuggestionsCount: 0,
    }),

    getters: {
        hasSuggestions: (state): boolean => state.aiSuggestionsCount > 0
    },

    actions: {
        setPageTitle(title: string) {
            this.pageTitle = title
        },

        toggleSidebar() {
            this.hiddeSidebar = !this.hiddeSidebar
        },

        setSuggestionsCount(count: number) {
            this.aiSuggestionsCount = count
        },

        clearSuggetions() {
            this.aiSuggestionsCount = 0
        }
    }
})