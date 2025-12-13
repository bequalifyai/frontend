<template>
    <header
        class="border-b border-b-[#F1F5F9] h-[64px] flex items-center justify-between pr-[24px]"
    >
        <div class="flex items-center">
            <button @click="headerStore.toggleSidebar" class="pl-[24px] pr-[14px]">
                <SidebarIcon />
            </button>
            <div class="h-[64px] bg-[#F1F5F9] w-[1px] mr-2"></div>
            <span> {{ headerStore.pageTitle }} </span>
        </div>
        <div class="">
            <NuxtLink
                v-if="headerStore.hasSuggestions"
                to="/suggestions"
                class="border border-[#E9D5FF] text-[#A855F7] font-medium rounded-[6px] px-[10px] py-[7px] relative transition-all duration-300 hover:bg-[#A855F7] hover:text-white hover:scale-105"
            >
                <StarsIcon class="inline mr-2" />
                <span> {{ headerStore.aiSuggestionsCount }} New Suggestions </span>
                <div
                    class="absolute w-[12px] h-[12px] bg-[#AD46FF] rounded-full opacity-60 top-[-3px] right-[-5px] group-hover:opacity-100 transition-opacity"
                ></div>
            </NuxtLink>
        </div>
    </header>
</template>

<script lang="ts" setup>
import SidebarIcon from "@/assets/icons/header/sidebar.svg?component";
import StarsIcon from "@/assets/icons/stars.svg?component";
import { useHeaderStore } from "~/store/header";
const headerStore = useHeaderStore();
</script>
